import { forwardRef } from "react"

const CursorFollower = forwardRef(function CursorFollower(props, ref) {

  return (
    <div ref={ref} className="fixed left-0 top-0 z-50 flex items-center justify-center pointer-events-none opacity-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 703 703" className="w-1/2">
        <g id="cursor-follower" className="animate-spin-medium origin-center">
          <circle id="circle-bg" cx="351.5" cy="351.5" r="286" className="fill-none stroke-white stroke-[130px]" />
          <g id="visit-text">
            <path
              d="m443.78 122.49-13.27-5.39.46-71 13.15 5.34-1.15 54 36.73-39.5 13.2 5.36ZM470.66 136.35l35.2-55.74 11.44 7.23-35.19 55.74ZM491.86 140.32l11.6-3.65a39.16 39.16 0 0 0 1.83 6.88 24.07 24.07 0 0 0 2.76 5.38 22.31 22.31 0 0 0 3.82 4.25 16.59 16.59 0 0 0 5.13 3.13 8.73 8.73 0 0 0 4.76.44 6.66 6.66 0 0 0 3.77-2.26 6.58 6.58 0 0 0 1.7-4.68 16.15 16.15 0 0 0-1.32-5.51q-1.21-2.93-2.86-6.08c-1-2.06-2-4.19-3-6.38a31.07 31.07 0 0 1-2.08-6.68 16.51 16.51 0 0 1 .13-6.82 15.81 15.81 0 0 1 3.66-6.79 17.15 17.15 0 0 1 8.75-5.69 18.84 18.84 0 0 1 10.32.29 28.28 28.28 0 0 1 10.32 5.85 40.77 40.77 0 0 1 6.48 7.19 47.36 47.36 0 0 1 5.11 9.33l-11.16 4.83a29.52 29.52 0 0 0-3.16-6.65 23.3 23.3 0 0 0-4.41-5.25 13 13 0 0 0-4.36-2.58 7.81 7.81 0 0 0-4.1-.32 5.93 5.93 0 0 0-3.29 2 6.14 6.14 0 0 0-1.53 4.4 16.21 16.21 0 0 0 1.28 5.36q1.17 2.85 2.65 6c1 2.12 2 4.33 3 6.61a32.84 32.84 0 0 1 2 6.94 18.07 18.07 0 0 1-.16 7 15.7 15.7 0 0 1-3.63 6.82 17.29 17.29 0 0 1-9 5.71A20.2 20.2 0 0 1 516 169a31.19 31.19 0 0 1-11.29-6.48 38.23 38.23 0 0 1-8.29-10 39.9 39.9 0 0 1-4.56-12.2ZM527.66 182.74l49.82-43.16 8.86 10.22-49.81 43.2ZM557.76 223.12l-7.27-11.42 45.63-29-10.43-16.39 10-6.34 28.16 44.22-10 6.35-10.45-16.42ZM577.1 260.08l63.42-18 6.14 21.69a34.88 34.88 0 0 1 1.34 14.59 21 21 0 0 1-4.87 11 21.26 21.26 0 0 1-10.55 6.37 21.55 21.55 0 0 1-12.37.12 21.11 21.11 0 0 1-10-6.79 34.33 34.33 0 0 1-6.5-13l-2.49-8.79-20.43 5.78Zm35.52 4 2.11 7.44q1.88 6.63 5.53 9.46a10 10 0 0 0 14.93-4.22q1.63-4.32-.25-11l-2.1-7.45ZM591.66 318.44l-.78-14.18 67.26 22.64.78 14.26L594.53 371l-.77-14.17 13.83-6.17-1.51-27.56Zm26.51 8.4 1 18.74 23.88-10.73ZM632.4 430.44a20.12 20.12 0 0 0 5.82-5.84 23.38 23.38 0 0 0 3.34-8.08 21.4 21.4 0 0 0 .18-8.49 18.29 18.29 0 0 0-3.07-7.3 20.7 20.7 0 0 0-6-5.59 26.19 26.19 0 0 0-8.57-3.35 26.82 26.82 0 0 0-9.3-.42 20.81 20.81 0 0 0-7.92 2.72 19.6 19.6 0 0 0-6 5.52 21.16 21.16 0 0 0-3.4 8 20.48 20.48 0 0 0-.31 7.19 17.51 17.51 0 0 0 2.12 6.27 18.54 18.54 0 0 0 4.36 5.08 23.45 23.45 0 0 0 6.37 3.62l4-18.7 10.1 2.15-6.45 30.35-5.07-.68a39.32 39.32 0 0 1-13-5.11 31.55 31.55 0 0 1-9.16-8.62 29.2 29.2 0 0 1-4.72-11.27 32.79 32.79 0 0 1 .27-13.13 35.39 35.39 0 0 1 5.43-12.76 33.61 33.61 0 0 1 9.37-9.2 33 33 0 0 1 12.2-4.84 36.76 36.76 0 0 1 26.48 5.6 33.16 33.16 0 0 1 14 21.42 34.63 34.63 0 0 1-.27 13.73 37.35 37.35 0 0 1-5.06 12.4 36.29 36.29 0 0 1-9 9.73ZM577.82 440.32l59.43 28.52-18.4 38.35-10.66-5.11 12.55-26.15-13.51-6.49L595.46 494l-10.7-5.13 11.77-24.53-13.91-6.67-12.73 26.55-10.66-5.12ZM556.58 521.07A7.92 7.92 0 0 1 562 518a8.24 8.24 0 0 1 1.88 16.37 8.12 8.12 0 0 1-7.28-13.26ZM487.49 555.73l11.45-8.61L559.56 584l-11.34 8.53-45.71-28.74 15 51.83-11.38 8.56ZM461.8 571.68l29.75 58.82-12.08 6.11-29.75-58.83ZM447.49 587.84l-2.84 11.83a39 39 0 0 0-6.83-2 24.26 24.26 0 0 0-6-.4 22.2 22.2 0 0 0-5.61 1.09 16.7 16.7 0 0 0-5.33 2.78A8.73 8.73 0 0 0 418 605a6.61 6.61 0 0 0 0 4.39 6.54 6.54 0 0 0 3.14 3.87 15.88 15.88 0 0 0 5.4 1.71c2.09.31 4.32.53 6.68.68s4.65.39 7 .71a31.14 31.14 0 0 1 6.8 1.65 16.74 16.74 0 0 1 5.78 3.62 15.93 15.93 0 0 1 3.93 6.64 17.09 17.09 0 0 1 .38 10.43 18.82 18.82 0 0 1-5.57 8.69 28 28 0 0 1-10.33 5.83 40.11 40.11 0 0 1-9.5 1.86 47.91 47.91 0 0 1-10.63-.42l1.61-12.06a29.64 29.64 0 0 0 7.32.72 23.36 23.36 0 0 0 6.77-1.08 13 13 0 0 0 4.46-2.41 7.77 7.77 0 0 0 2.38-3.35 5.87 5.87 0 0 0 0-3.86 6.05 6.05 0 0 0-3-3.57 16 16 0 0 0-5.25-1.66q-3-.48-6.49-.81t-7.2-.86a32.87 32.87 0 0 1-7-1.82 18.14 18.14 0 0 1-5.91-3.74 15.65 15.65 0 0 1-4-6.62 17.29 17.29 0 0 1-.28-10.63 20.22 20.22 0 0 1 6-9.16 31.12 31.12 0 0 1 11.37-6.33 38.21 38.21 0 0 1 12.81-2 39.72 39.72 0 0 1 12.82 2.42ZM392.73 596.67l11.26 65-13.34 2.31L379.4 599ZM342.55 601.59l13.53-.33 1.31 54.08 19.42-.47.29 11.82-52.41 1.31-.29-11.82 19.46-.47ZM300.94 599.15l-17.21 63.63-21.73-5.89a34.86 34.86 0 0 1-13.15-6.35 21 21 0 0 1-7-9.85 21.23 21.23 0 0 1 0-12.32 21.5 21.5 0 0 1 6.25-10.67 21 21 0 0 1 11-5.08 34.25 34.25 0 0 1 14.48 1.1l8.82 2.38 5.54-20.49Zm-21.71 28.41-7.46-2q-6.66-1.8-11-.12a9.14 9.14 0 0 0-5.62 6.56 9 9 0 0 0 1.58 8.41q2.87 3.63 9.52 5.42l7.47 2ZM243.4 581.64l12.6 6.63-54 46-12.63-6.67 7.62-70.54 12.54 6.63-1.83 15 24.3 12.93ZM222.54 600 206 591.27l-3.1 26ZM126.45 558.77a20 20 0 0 0 2 8 23.22 23.22 0 0 0 5.2 7 21.23 21.23 0 0 0 7.18 4.55 18.34 18.34 0 0 0 7.84 1.13 20.63 20.63 0 0 0 7.87-2.24 26.27 26.27 0 0 0 7.29-5.61 26.62 26.62 0 0 0 5.16-7.75 20.93 20.93 0 0 0 1.76-8.19 19.52 19.52 0 0 0-1.66-7.95 21.07 21.07 0 0 0-5.07-7 20.29 20.29 0 0 0-6-4 17.51 17.51 0 0 0-6.46-1.41 18.18 18.18 0 0 0-6.6 1.11 22.89 22.89 0 0 0-6.4 3.59l14 13.05-7.05 7.54-22.67-21.18 3.19-4a39.5 39.5 0 0 1 11.05-8.41 31.38 31.38 0 0 1 12.1-3.39 29.07 29.07 0 0 1 12.1 1.76 33 33 0 0 1 11.1 7 35.16 35.16 0 0 1 8.17 11.18 33.51 33.51 0 0 1 3 12.77 33 33 0 0 1-2.14 12.94A36.77 36.77 0 0 1 163 589a33.15 33.15 0 0 1-25.56.93 34.62 34.62 0 0 1-11.63-7.32 37.42 37.42 0 0 1-8-10.73 36.25 36.25 0 0 1-3.7-12.72ZM146.1 506.91l-55 36.34-23.45-35.48 9.86-6.52 16 24.19 12.5-8.26L91 494.49l9.9-6.54 15 22.69 12.86-8.51-16.23-24.56 9.86-6.52ZM87.73 447.19a8 8 0 0 1-.1 6.24 8.25 8.25 0 0 1-15-6.81 8.12 8.12 0 0 1 15.12.57ZM93.67 370.13l1.46 14.26-62.9 32.86-1.44-14.12L79 378.84l-52.13-13.92-1.45-14.17ZM93.26 339.86l-65.74-4.78 1-13.5 65.75 4.78ZM86.77 319.29l-8.68-8.52a39.17 39.17 0 0 0 5.2-4.85 24.61 24.61 0 0 0 3.46-5 22.44 22.44 0 0 0 1.94-5.38 16.31 16.31 0 0 0 .35-6 8.67 8.67 0 0 0-1.85-4.4 7 7 0 0 0-8.7-1.56 15.93 15.93 0 0 0-4.24 3.76c-1.34 1.63-2.68 3.43-4 5.38s-2.73 3.78-4.21 5.65a31.35 31.35 0 0 1-4.92 5 16.55 16.55 0 0 1-6.08 3.1 15.93 15.93 0 0 1-7.71 0 17.21 17.21 0 0 1-9.14-5 19 19 0 0 1-4.6-9.25 28.3 28.3 0 0 1 .31-11.86 39.82 39.82 0 0 1 3.3-9.11 46.94 46.94 0 0 1 5.8-8.94l9.51 7.57a30 30 0 0 0-4.38 5.91 23.3 23.3 0 0 0-2.55 6.37 13.16 13.16 0 0 0-.23 5.06A7.81 7.81 0 0 0 47 291a5.9 5.9 0 0 0 3.32 2 6.13 6.13 0 0 0 4.6-.73 16.2 16.2 0 0 0 4.12-3.65c1.32-1.58 2.66-3.3 4-5.15s2.86-3.83 4.43-5.74a31.66 31.66 0 0 1 5.17-5.06 18 18 0 0 1 6.24-3.16 15.71 15.71 0 0 1 7.72 0 17.19 17.19 0 0 1 9.26 5.22 20.22 20.22 0 0 1 4.78 9.85 31.4 31.4 0 0 1-.41 13 38.33 38.33 0 0 1-4.9 12 40 40 0 0 1-8.56 9.71ZM107.35 267.79 45.86 244l4.87-12.62 61.5 23.74ZM128.92 222.28l-6.69 11.77-47-26.73-9.59 16.89-10.28-5.85 25.9-45.58 10.28 5.85-9.62 16.92ZM152.54 187.88l-45.66-47.54 16.26-15.62a34.9 34.9 0 0 1 12.22-8 21 21 0 0 1 12-.89 21.33 21.33 0 0 1 10.64 6.33 21.57 21.57 0 0 1 5.89 10.84 21.1 21.1 0 0 1-1.3 12 34.3 34.3 0 0 1-8.4 11.84l-6.59 6.33 14.7 15.31Zm-13.16-33.24 5.58-5.36q5-4.78 5.75-9.33a9.11 9.11 0 0 0-2.73-8.2 9 9 0 0 0-8-3q-4.58.59-9.55 5.37l-5.58 5.36ZM197.2 147.56l-12.14 7.36-11.72-70 12.21-7.41 56.62 42.75-12.17 7.38-12-9.3-23.59 14.31Zm-5.08-27.35 16-9.73-20.71-16ZM277 59a20 20 0 0 0-7.89-2.41 23.13 23.13 0 0 0-8.69.84 21.48 21.48 0 0 0-7.6 3.81 18.53 18.53 0 0 0-5 6.14 20.61 20.61 0 0 0-2.13 7.9 26.36 26.36 0 0 0 1.05 9.13 27 27 0 0 0 4 8.42 21 21 0 0 0 6.12 5.73 19.41 19.41 0 0 0 7.66 2.67 21.13 21.13 0 0 0 8.64-.72 20.59 20.59 0 0 0 6.5-3.09 17.61 17.61 0 0 0 4.54-4.82 18.13 18.13 0 0 0 2.45-6.23 22.86 22.86 0 0 0 .21-7.33l-18.38 5.25-2.83-9.93 29.83-8.52 1.78 4.8a39.23 39.23 0 0 1 1.56 13.86 31.53 31.53 0 0 1-3.33 12.12 29.22 29.22 0 0 1-7.74 9.46A32.73 32.73 0 0 1 276 112a35 35 0 0 1-13.79 1.24 33.21 33.21 0 0 1-22.5-12.47 36.7 36.7 0 0 1-7.45-26 33.14 33.14 0 0 1 12.37-22.39 34.51 34.51 0 0 1 12.26-6.19 37.28 37.28 0 0 1 13.33-1.34A36.23 36.23 0 0 1 283 48.19ZM311.3 102.6l-2.73-65.86 42.5-1.74.49 11.81-29 1.2.62 15 27.18-1.13.49 11.86-27.18 1.13.64 15.41L353.75 89l.49 11.81ZM392.53 83.34a7.94 7.94 0 0 1-5.3-3.29 8.25 8.25 0 0 1 13.56-9.38 8.12 8.12 0 0 1-8.26 12.67Z"
              className="fill-neutral-950"
            />
          </g>
        </g>
      </svg>
    </div>
  )
})

export default CursorFollower