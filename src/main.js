import { mount } from 'svelte';
import App from './App.svelte';
import { startAnalytics } from './firebase.js';
import './app.css';

// The old site kept its own login token under these keys; Firebase Auth handles sessions now.
try {
  for (const key of ['user', 'token', '_secure__ls__metadata']) localStorage.removeItem(key);
} catch {
  // storage can be blocked entirely (private browsing, strict cookie settings)
}

mount(App, { target: document.getElementById('app') });
startAnalytics();
