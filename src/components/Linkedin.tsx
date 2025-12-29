import type { SVGProps } from 'react';

export function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt */}<circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0"><animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1" /></circle><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path strokeDasharray="12" strokeDashoffset="12" d="M4 10v10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0" /></path><path strokeDasharray="12" strokeDashoffset="12" d="M10 10v10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0" /></path><path strokeDasharray="24" strokeDashoffset="24" d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0" /></path></g></svg>
  );
};

// export function RiLinkedinBoxLine(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License */}<path fill="currentColor" d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm2.5 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 1h2v7.5h-2zm5.5.43c.584-.565 1.266-.93 2-.93c2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 1 0-3.5 0v4.25h-2V10h2z" /></svg>
//   )
// }

export default Linkedin;
