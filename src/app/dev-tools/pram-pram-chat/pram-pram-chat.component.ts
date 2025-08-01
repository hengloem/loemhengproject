import { Component } from '@angular/core';

@Component({
  selector: 'app-pram-pram-chat',
  templateUrl: './pram-pram-chat.component.html',
  styleUrls: ['./pram-pram-chat.component.scss']
})
export class PramPramChatComponent {
  sidebarCollapsed = false;
  showCodeSection = true;
  currentMessage = '';
  selectedLanguage = 'typescript';
  codeContent = '';

  chatHistory = [
    { id: 1, title: 'Previous Chat 1' },
    { id: 2, title: 'Previous Chat 2' },
    { id: 3, title: 'Previous Chat 3' }
  ];

  messages = [
    { type: 'assistant', content: 'Hello! How can I help you today?' }
  ];

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  toggleCodeSection() {
    this.showCodeSection = !this.showCodeSection;
  }

  selectChat(chat: any) {
    console.log('Selected chat:', chat);
    // Load chat history here
  }

  sendMessage(event?: any) {
    if (event && !event.shiftKey) {
      event.preventDefault();
    } else if (event && event.shiftKey) {
      return;
    }

    if (this.currentMessage.trim()) {
      this.messages.push({
        type: 'user',
        content: this.currentMessage
      });

      // Simulate assistant response
      setTimeout(() => {
        this.messages.push({
          type: 'assistant',
          content: 'I received your message: "' + this.currentMessage + '". How can I assist you further?'
        });
      }, 1000);

      this.currentMessage = '';
    }
  }

  onLanguageChange() {
    console.log('Language changed to:', this.selectedLanguage);
  }

  runCode() {
    console.log('Running code:', this.codeContent);
    // Implement code execution logic
  }

  clearCode() {
    this.codeContent = '';
  }

  copyCode() {
    navigator.clipboard.writeText(this.codeContent);
  }
}
