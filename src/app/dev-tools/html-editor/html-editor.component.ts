
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { EditorView, basicSetup } from 'codemirror';
import { html } from '@codemirror/lang-html';
import { EditorState } from '@codemirror/state';
import { indentUnit } from '@codemirror/language';
import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss']
})
export class HtmlEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editorContainer') editorContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('previewFrame') previewFrame!: ElementRef<HTMLIFrameElement>;

  editor!: EditorView;
  isFullscreen = false;
  isDarkTheme = false;
  statusMessage = 'Ready';
  cursorLine = 1;
  cursorCh = 1;
  currentViewport = 'desktop';

  // HTML templates
  templates = {
    basic: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        /* Add your CSS here */
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <!-- Add your content here -->
      <h1>Hello World!</h1>
      <p>This is a basic HTML template.</p>
      
      <script>
        // Add your JavaScript here
        console.log('Page loaded!');
      </script>
    </body>
    </html>`,
  };

  ngAfterViewInit(): void {
    this.initEditor();
    this.setupAutosave();
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  initEditor(): void {
    const startState = EditorState.create({
      doc: localStorage.getItem('html-editor-content') || this.templates.basic,
      extensions: [
        basicSetup,
        html(),
        indentUnit.of('  '),
        keymap.of([indentWithTab]),
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            this.autoSaveContent(update.state.doc.toString());
            this.statusMessage = 'Changes made';
          }

          if (update.selectionSet) {
            const pos = update.state.selection.main.head;
            const line = update.state.doc.lineAt(pos);
            this.cursorLine = line.number;
            this.cursorCh = pos - line.from + 1;
          }
        }),
        EditorView.theme({
          "&": {
            height: "100%",
            fontSize: "14px"
          }
        })
      ]
    });

    this.editor = new EditorView({
      state: startState,
      parent: this.editorContainer.nativeElement
    });

    // Initial preview
    setTimeout(() => this.runCode(), 500);
  }

  runCode(): void {
    const code = this.editor.state.doc.toString();
    const previewDoc = this.previewFrame.nativeElement.contentDocument;
    if (previewDoc) {
      previewDoc.open();
      previewDoc.write(code);
      previewDoc.close();
      this.statusMessage = 'Preview updated';
    }
  }

  clearEditor(): void {
    this.editor.dispatch({
      changes: {
        from: 0,
        to: this.editor.state.doc.length,
        insert: ''
      }
    });
    this.runCode();
    this.statusMessage = 'Editor cleared';
  }

  downloadCode(): void {
    const code = this.editor.state.doc.toString();
    const blob = new Blob([code], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'html-code-editor.html';
    a.click();
    URL.revokeObjectURL(a.href);
    this.statusMessage = 'Code downloaded';
  }

  insertTemplate(templateName: string): void {
    const template = this.templates[templateName as keyof typeof this.templates];
    if (template) {
      this.editor.dispatch({
        changes: {
          from: 0,
          to: this.editor.state.doc.length,
          insert: template
        }
      });
      this.runCode();
      this.statusMessage = 'Template inserted';
    }
  }

  // A basic indent-only formatting function without prettier
  formatCode(): void {
    try {
      // Get the current code
      const code = this.editor.state.doc.toString();

      // Very basic formatting (not as good as prettier)
      const formattedCode = this.basicFormatHtml(code);

      // Apply the changes
      this.editor.dispatch({
        changes: [{
          from: 0,
          to: this.editor.state.doc.length,
          insert: formattedCode
        }]
      });

      this.statusMessage = 'Code formatted';
    } catch (error) {
      this.statusMessage = 'Format error: ' + (error instanceof Error ? error.message : String(error));
    }
  }

  // A very basic HTML formatter (not as powerful as prettier)
  basicFormatHtml(html: string): string {
    let formatted = '';
    let indent = 0;
    const tab = '  '; // 2 spaces

    // Helper function to get indentation string
    const getIndent = (count: number) => tab.repeat(count);

    // Split by < to get tags and content
    const tokens = html.split('<');

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (!token) continue;

      // Check if closing tag
      if (token.startsWith('/')) {
        indent--;
        formatted += getIndent(Math.max(0, indent)) + '<' + token.trim() + '\n';
      }
      // Self-closing tag
      else if (token.includes('/>')) {
        formatted += getIndent(indent) + '<' + token.trim() + '\n';
      }
      // Opening tag
      else if (token.includes('>')) {
        const parts = token.split('>');

        if (parts.length >= 2) {
          // Handle tag
          formatted += getIndent(indent) + '<' + parts[0].trim() + '>\n';

          // Handle content
          const content = parts[1].trim();
          if (content) {
            // Skip indentation for short plain text
            if (content.length < 30 && !content.includes('<') && !content.includes('\n')) {
              formatted += getIndent(indent + 1) + content + '\n';
            } else {
              indent++;
              formatted += getIndent(indent) + content + '\n';
            }
          } else {
            indent++;
          }
        }
      }
    }

    return formatted;
  }

  refreshPreview(): void {
    this.runCode();
  }

  changeViewport(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.currentViewport = select.value;

    const previewFrame = this.previewFrame.nativeElement;

    switch (this.currentViewport) {
      case 'mobile':
        previewFrame.style.width = '375px';
        previewFrame.style.margin = '0 auto';
        break;
      case 'tablet':
        previewFrame.style.width = '768px';
        previewFrame.style.margin = '0 auto';
        break;
      case 'desktop':
      default:
        previewFrame.style.width = '100%';
        previewFrame.style.margin = '0';
        break;
    }

    this.statusMessage = `Viewport changed to ${this.currentViewport}`;
  }

  private autoSaveContent(content: string): void {
    localStorage.setItem('html-editor-content', content);
  }

  private setupAutosave(): void {
    // Auto-save on page unload
    window.addEventListener('beforeunload', () => {
      this.autoSaveContent(this.editor.state.doc.toString());
    });
  }
}