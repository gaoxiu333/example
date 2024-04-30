import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://4ea06e765be8f8f812cdb9e7eeddbc44@o4507161283854336.ingest.us.sentry.io/4507161403719680',

  // Alternatively, use `process.env.npm_package_version` for a dynamic release version
  // if your build tool supports it.
  release: 'my-project-name@2.3.12',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: true,
});

export const add = (a: number, b: number) => a + b;
export const sub = (a: number, b: number) => a - b;
window.addEventListener('error', (e) => console.log('error', e));
console.log('hello world!');

console.log('navigator', navigator.sendBeacon('hello', 'world'));
const { userAgent, language } = navigator;
const { title } = document;
const { href } = location;
console.log({ userAgent, language, title, href });
// a =1

// 创建一个图片
const img = document.createElement('img');
img.src = 'https://vsssg';
document.body.appendChild(img);

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
    // 页面不可见时执行的操作
    console.log('页面不可见');
  } else {
    // 页面可见时执行的操作
    console.log('页面可见');
  }
});

Array.from({ length: 10 }, (_, i) => i).forEach((i) => {
  const img = document.createElement('img');
  img.src = 'https://vsssg';
  document.body.appendChild(img);
});
async function test() {
  for (let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    await promiseResolve();
    const img = document.createElement('img');
    img.src = 'https://vsssg' + i;
    document.body.appendChild(img);
  }
}
test();

function promiseResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 1000);
  });
}
