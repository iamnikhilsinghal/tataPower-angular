import { Injectable } from '@angular/core';

@Injectable()
export class ComponentLevelService {
  constructor() {}

  show() {
    return 'this service is injected at component level';
  }
}

// Scope: A new instance is created for that component (and its children).
// Use case: When you want isolated instances, e.g., a service managing state for that component only.

// Pros:
// Useful for encapsulated logic or temporary state.
// Helps avoid shared mutable state.
