'use client';
import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(
      new URL('./calculator.worker.ts', import.meta.url)
    );

    worker.onmessage = (event) => {
      setD(event.data);
      worker.terminate();
    };

    worker.postMessage('start');

    return () => {
      worker.terminate();
    };
  }, []);

  return (<>
    <div>{d}</div>
    <details>
      <summary>AI Explanation</summary>
      <div>
        The high Total Blocking Time (TBT) in your page is caused by a heavy computation being performed directly in the useEffect hook on the main thread. Let me explain step by step:
        <ul className='list-disc ml-4'>
          <li>The issue is in your useEffect, where you&apos;re running a CPU-intensive loop that iterates 100 million times</li>
          <li>This computation blocks the main thread (where UI rendering and user interactions happen)</li>
          <li>Since it&apos;s running right after the component mounts, it causes a significant delay in page interactivity</li>
        </ul>
      </div>
    </details>
    <details>
      <summary>AI Metrics Check-list</summary>
      <div>
        Performance Metrics Checklist
        <ul className='list-disc ml-4'>
          <li> Run Lighthouse in Chrome DevTools:
            <ul className='list-["-"] ml-4'>
              <li>Open Chrome DevTools (F12)</li>
              <li>Go to &quot;Lighthouse&quot; tab</li>
              <li>Select &quot;Performance&quot; checkbox</li>
              <li>Choose &quot;Mobile&quot; device</li>
              <li>Click &quot;Analyze page load&quot;</li>
            </ul>
          </li>
          <li>Key metrics to verify:
            <ul className='list-["-"] ml-4'>
              <li>Total Blocking Time (TBT) should be significantly lower (target: &lt; 200ms)</li>
              <li>First Contentful Paint (FCP) should be fast (target: &lt; 1.8s)</li>
              <li>Time to Interactive (TTI) should improve</li>
              <li>Main thread work should show less blocking</li>
            </ul>
          </li>
          <li>
            Chrome DevTools Performance tab check:

            <ul className='list-["-"] ml-4'>
              <li>Record a performance profile</li>
              <li>Look for long tasks in main thread (they should be minimal now)</li>
              <li>Verify that calculations happen in Worker thread</li>
              <li>Check that there are no UI freezes</li>
            </ul>
          </li>
          <li>
            User-centric verification:

            <ul className='list-["-"] ml-4'>
              <li>Page should remain responsive during calculation</li>
              <li>UI should not freeze</li>
              <li>Interactions should work smoothly</li>
            </ul>
          </li>
        </ul>
      </div>
    </details>
  </>)
}
