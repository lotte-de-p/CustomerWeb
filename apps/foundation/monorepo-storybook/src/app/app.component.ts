import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="flex flex-direction-column">
    <h1>Welcome to our monorepo-storybook 👋</h1>
    <p>🚀 This is a monorepo with multiple Angular applications and a shared library.</p>
    <p>🧪 It uses Nx to manage the monorepo.</p>
    <p>📚 It uses Storybook to document and test the shared library.</p>
    <p>📦 It uses Nx to build and publish the shared library to npm.</p>
    <p>📝 It uses Nx to generate documentation for the shared library.</p>
    <p>🔎 It uses Nx to generate dependency graphs.</p>
  </div>`,
  styles: [],
  standalone: true,
})
export class AppComponent {
  title = 'monorepo-storybook';
}
