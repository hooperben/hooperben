import React from "react";

const UTXO = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="300"
      height="150"
      version="1"
      scale={0.1}
      viewBox="0 0 472.5 175.5"
    >
      <defs>
        <filter id="3d3169bcde" width="100%" height="100%" x="0%" y="0%">
          <feColorMatrix
            colorInterpolationFilters="sRGB"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          ></feColorMatrix>
        </filter>
        <filter id="b3d96a1c6b" width="100%" height="100%" x="0%" y="0%">
          <feColorMatrix
            colorInterpolationFilters="sRGB"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
          ></feColorMatrix>
        </filter>
        <clipPath id="11115f9c87">
          <path d="M.422 38.809h41.555v41.554H.422zm0 0"></path>
        </clipPath>
        <clipPath id="3f2399b575">
          <path d="M21.2 38.809C9.722 38.809.421 48.113.421 59.586c0 11.477 9.3 20.777 20.777 20.777 11.473 0 20.778-9.3 20.778-20.777 0-11.473-9.305-20.777-20.778-20.777zm0 0"></path>
        </clipPath>
        <clipPath id="62f6a19a58">
          <path d="M.422 100H38v59H.422zm0 0"></path>
        </clipPath>
        <clipPath id="accb11d0be">
          <path d="M334.875 38.809h41.55v41.554h-41.55zm0 0"></path>
        </clipPath>
        <clipPath id="cab911cc2f">
          <path d="M355.648 38.809c-11.472 0-20.773 9.304-20.773 20.777 0 11.477 9.3 20.777 20.773 20.777 11.477 0 20.778-9.3 20.778-20.777 0-11.473-9.301-20.777-20.778-20.777zm0 0"></path>
        </clipPath>
        <clipPath id="ca732a192f">
          <path d="M.918.785H273.98v43.559H.918zm0 0"></path>
        </clipPath>
        <image
          width="275"
          height="45"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAtCAYAAACNro/RAAAABmJLR0QA/wD/AP+gvaeTAAAArUlEQVR4nO3UwQkAIRDAwNX+az6uCAOCzFSQV9bMfANwaN8OAN5gJkDCTICEmQAJMwESZgIkzARImAmQMBMgYSZAwkyAhJkACTMBEmYCJMwESJgJkDATIGEmQMJMgISZAAkzARJmAiTMBEiYCZAwEyBhJkDCTICEmQAJMwESZgIkzARImAmQMBMgYSZAwkyAhJkACTMBEmYCJMwESJgJkDATIGEmQMJMgISZAIkf1dIBWJqPKpgAAAAASUVORK5CYII="
        ></image>
        <mask id="d402bc0e30">
          <g filter="url(#3d3169bcde)">
            <image
              width="275"
              height="45"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAtCAYAAACNro/RAAAABmJLR0QA/wD/AP+gvaeTAAAArUlEQVR4nO3UwQkAIRDAwNX+az6uCAOCzFSQV9bMfANwaN8OAN5gJkDCTICEmQAJMwESZgIkzARImAmQMBMgYSZAwkyAhJkACTMBEmYCJMwESJgJkDATIGEmQMJMgISZAAkzARJmAiTMBEiYCZAwEyBhJkDCTICEmQAJMwESZgIkzARImAmQMBMgYSZAwkyAhJkACTMBEmYCJMwESJgJkDATIGEmQMJMgISZAIkf1dIBWJqPKpgAAAAASUVORK5CYII="
            ></image>
          </g>
        </mask>
        <clipPath id="6dc446b0a7">
          <path d="M1 .836h272.973V44.21H1zm0 0"></path>
        </clipPath>
        <clipPath id="2f1b45e4d3">
          <path d="M0 0H274V45H0z"></path>
        </clipPath>
        <clipPath id="13b0f211b9">
          <path d="M.918.785H273.98v43.559H.918zm0 0"></path>
        </clipPath>
        <clipPath id="a84dca19d1">
          <path d="M5 3.078h267V41.91H5zm0 0"></path>
        </clipPath>
        <image
          width="1119"
          height="163"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABF8AAACjCAAAAAB5ru7JAAAAAmJLR0QA/4ePzL8AAASTSURBVHic7d1NiFV1HMfh46CIEhKGCxdlUELlC1KEoc1xFhFE26CgoJ0wBkIYGpilRC0KS7Q3hbYR5KaIoiKo60DLFoYI6qZFhNVImL0gQy2i5Nx7zrnnLL4NXZ5n5e9/fwfO6oPMf16KAgDg/2VJUezcu9gvAUyecw8US4vi+lsW+z2AyfN7UUwt9jsAE0tfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0Behtfu+vXdaWpt8DmDQLbxycX/ZCh0X/fwH6+Xzj7vni8LcdNvUF6OPcg/edLYrijz0ddvUF6O7nJzd89Pe/Tg7Gb+sL0NXCm7ceufrPMPvn2H19ATr6cuOuH69NZ94e+4C+AN2cnTlbmfdfHveEvgDd3PZQdb74/Lgn9AXo6PDy6nxk3B21vgAd3TR0J31195gH9AXoav+a6vz+mDtqfQG6Wvny0MHsQuu+vgCdPb6lOp850bquL0B3bw3N7XfU+gJ0t/WR6nzp2bZtfQF6eGXojvrY+ZZlfQF6WLuvOi+03VHrC9DHvrXV+ePPmnf1Behj5I56V/Mdtb4AvTy6tTqff61xVV+AfobvqA9catrUF6CfLY9V58vPNG3qC9DTSyur8/EzDYv6AvS09unqvDDbsKgvQF97h+6oBx/U7+kL0NfyV4cO9lyt3dMXoLeHt1Xn80dr1/QF6O/1ofnQD3Vb+gL0t+7e6nz5QN2WvgD9XHxvdvPquaHD46drNpf+F68DTIgLg1ODC7WfnDg2eqYvQDffnBoMvmv89OTRJSNn+gKMtfD1YDD3U+vK9/M3jJzpC9BuMPfF3G/j11aMHukL0Oz0u3Nj/sbRv1aOHukL0OzUi10376k5cz8NNJvpvHmo5kxfgGZ3rO64+NT9NYf6ArTY0W3t4PBv5S2KQl+AVjNdlja881ztua/vAi3KMZ9PbZouZ9Y0fKgvQIvN1/3S+NmyO8uyXNXysL4ALaZmPqw9X7G1LLfVfEtdhb4AbXaM9mXV9rK8e1mHZ/UFaDN0gbRmerrc0vVeSF+ANndd+wLMjdNleXufZ/UFaDO1/ZOiKIr1ZVne3PdZfQFa7fh0U9l8Bd1KX4BWO59ou4JupS9Aq9FfG9WZnw8AUvQFSNEXIEVfgBR9AVL0BUjRFyBlSVGsW7/YLwFMnitfLfYbABPsL1fJgYN15p34AAAAAElFTkSuQmCC"
        ></image>
        <mask id="5756aa654a">
          <g filter="url(#3d3169bcde)">
            <g
              filter="url(#b3d96a1c6b)"
              transform="matrix(.23932 0 0 .23932 4.508 2.94)"
            >
              <image
                width="1119"
                height="163"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABF8AAACjCAAAAAB5ru7JAAAAAmJLR0QA/4ePzL8AAASTSURBVHic7d1NiFV1HMfh46CIEhKGCxdlUELlC1KEoc1xFhFE26CgoJ0wBkIYGpilRC0KS7Q3hbYR5KaIoiKo60DLFoYI6qZFhNVImL0gQy2i5Nx7zrnnLL4NXZ5n5e9/fwfO6oPMf16KAgDg/2VJUezcu9gvAUyecw8US4vi+lsW+z2AyfN7UUwt9jsAE0tfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0BUjRFyBFX4AUfQFS9AVI0RcgRV+AFH0BUvQFSNEXIEVfgBR9AVL0Behtfu+vXdaWpt8DmDQLbxycX/ZCh0X/fwH6+Xzj7vni8LcdNvUF6OPcg/edLYrijz0ddvUF6O7nJzd89Pe/Tg7Gb+sL0NXCm7ceufrPMPvn2H19ATr6cuOuH69NZ94e+4C+AN2cnTlbmfdfHveEvgDd3PZQdb74/Lgn9AXo6PDy6nxk3B21vgAd3TR0J31195gH9AXoav+a6vz+mDtqfQG6Wvny0MHsQuu+vgCdPb6lOp850bquL0B3bw3N7XfU+gJ0t/WR6nzp2bZtfQF6eGXojvrY+ZZlfQF6WLuvOi+03VHrC9DHvrXV+ePPmnf1Behj5I56V/Mdtb4AvTy6tTqff61xVV+AfobvqA9catrUF6CfLY9V58vPNG3qC9DTSyur8/EzDYv6AvS09unqvDDbsKgvQF97h+6oBx/U7+kL0NfyV4cO9lyt3dMXoLeHt1Xn80dr1/QF6O/1ofnQD3Vb+gL0t+7e6nz5QN2WvgD9XHxvdvPquaHD46drNpf+F68DTIgLg1ODC7WfnDg2eqYvQDffnBoMvmv89OTRJSNn+gKMtfD1YDD3U+vK9/M3jJzpC9BuMPfF3G/j11aMHukL0Oz0u3Nj/sbRv1aOHukL0OzUi10376k5cz8NNJvpvHmo5kxfgGZ3rO64+NT9NYf6ArTY0W3t4PBv5S2KQl+AVjNdlja881ztua/vAi3KMZ9PbZouZ9Y0fKgvQIvN1/3S+NmyO8uyXNXysL4ALaZmPqw9X7G1LLfVfEtdhb4AbXaM9mXV9rK8e1mHZ/UFaDN0gbRmerrc0vVeSF+ANndd+wLMjdNleXufZ/UFaDO1/ZOiKIr1ZVne3PdZfQFa7fh0U9l8Bd1KX4BWO59ou4JupS9Aq9FfG9WZnw8AUvQFSNEXIEVfgBR9AVL0BUjRFyBlSVGsW7/YLwFMnitfLfYbABPsL1fJgYN15p34AAAAAElFTkSuQmCC"
              ></image>
            </g>
          </g>
        </mask>
        <image
          width="1119"
          height="163"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABF8AAACjCAIAAADTpyZCAAAABmJLR0QA/wD/AP+gvaeTAAACKUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+DBakgABX8MwfwAAAABJRU5ErkJggg=="
        ></image>
        <clipPath id="81f6817028">
          <path d="M0 0H274V45H0z"></path>
        </clipPath>
        <clipPath id="2935ae672c">
          <path d="M0 0H274V45H0z"></path>
        </clipPath>
        <mask id="d19e370ac2">
          <g filter="url(#3d3169bcde)">
            <g clipPath="url(#2935ae672c)">
              <g clipPath="url(#13b0f211b9)">
                <g clipPath="url(#81f6817028)">
                  <g clipPath="url(#a84dca19d1)" mask="url(#5756aa654a)">
                    <image
                      width="1119"
                      height="163"
                      transform="matrix(.23932 0 0 .23932 4.508 2.94)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABF8AAACjCAIAAADTpyZCAAAABmJLR0QA/wD/AP+gvaeTAAACKUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+DBakgABX8MwfwAAAABJRU5ErkJggg=="
                    ></image>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </mask>
        <clipPath id="7c10b27d3e">
          <path d="M1 .836h272.973V44.21H1zm0 0"></path>
        </clipPath>
        <clipPath id="387836047a">
          <path d="M0 0H274V45H0z"></path>
        </clipPath>
        <clipPath id="f58acb4c79">
          <path d="M0 0H274V45H0z"></path>
        </clipPath>
        <clipPath id="8ba8852414">
          <path d="M138.95 0h81.6v38.809h-81.6zm0 0"></path>
        </clipPath>
        <clipPath id="adebba9833">
          <path d="M138.96 0h81.58v38.797h-81.58zm0 0"></path>
        </clipPath>
        <clipPath id="81941c11b7">
          <path d="M161.566 29.64h81.602v38.813h-81.602zm0 0"></path>
        </clipPath>
        <clipPath id="626c83d8f7">
          <path d="M161.578 29.64h81.578v38.801h-81.578zm0 0"></path>
        </clipPath>
        <clipPath id="0f9e1a55f3">
          <path d="M389.71 80.223h81.599v38.812H389.71zm0 0"></path>
        </clipPath>
        <clipPath id="f7b2b891a4">
          <path d="M389.719 80.223h81.578v38.8h-81.578zm0 0"></path>
        </clipPath>
        <clipPath id="71bceb8b59">
          <path d="M.55.043h273.302V43.84H.55zm0 0"></path>
        </clipPath>
        <image
          width="275"
          height="45"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAtCAYAAACNro/RAAAABmJLR0QA/wD/AP+gvaeTAAAArUlEQVR4nO3UwQkAIRDAwNX+az6uCAOCzFSQV9bMfANwaN8OAN5gJkDCTICEmQAJMwESZgIkzARImAmQMBMgYSZAwkyAhJkACTMBEmYCJMwESJgJkDATIGEmQMJMgISZAAkzARJmAiTMBEiYCZAwEyBhJkDCTICEmQAJMwESZgIkzARImAmQMBMgYSZAwkyAhJkACTMBEmYCJMwESJgJkDATIGEmQMJMgISZAIkf1dIBWJqPKpgAAAAASUVORK5CYII="
        ></image>
        <mask id="7c072d2930">
          <g filter="url(#3d3169bcde)">
            <image
              width="275"
              height="45"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAtCAYAAACNro/RAAAABmJLR0QA/wD/AP+gvaeTAAAArUlEQVR4nO3UwQkAIRDAwNX+az6uCAOCzFSQV9bMfANwaN8OAN5gJkDCTICEmQAJMwESZgIkzARImAmQMBMgYSZAwkyAhJkACTMBEmYCJMwESJgJkDATIGEmQMJMgISZAAkzARJmAiTMBEiYCZAwEyBhJkDCTICEmQAJMwESZgIkzARImAmQMBMgYSZAwkyAhJkACTMBEmYCJMwESJgJkDATIGEmQMJMgISZAIkf1dIBWJqPKpgAAAAASUVORK5CYII="
            ></image>
          </g>
        </mask>
        <clipPath id="972db64a89">
          <path d="M.656.262H273.63V43.64H.656zm0 0"></path>
        </clipPath>
        <clipPath id="55f8f08a10">
          <path d="M0 0H274V44H0z"></path>
        </clipPath>
        <clipPath id="bada5d3f98">
          <path d="M.55.043h273.302V43.84H.55zm0 0"></path>
        </clipPath>
        <clipPath id="b4b1b3332b">
          <path d="M2.473 2.566H269.89V41H2.473zm0 0"></path>
        </clipPath>
        <image
          width="1118"
          height="163"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABF4AAACjCAAAAACWbIX3AAAAAmJLR0QA/4ePzL8AAATWSURBVHic7d1LiFV1AMfxMz4qJAmFolokiEXYwuhBmHo1qBbRg6h2RRAFE9ELClsUPaQMwqgWGUQEGS1cuGrb61wrzaxwIQVtNMoeFFhhyoi2kfDczn2M3J9D/z6f3f/MPfBbfWHm3OFUFQDAf8lEdef6md4AlOf7y6s51bxzZnoGUJ6pqpo10xuAUskLECIvQIi8ACHyAoTICxAiL0DInBO6a2pHt96/dcxTgLJMPy8HP6nrbX9VVfXn6eOfA5Rjenn5vVvXO6eOHd6/cfxzgHKMnpdfP6i7u44cd6ErL8AAo+VlT92tv+m9WI99DFCS4Xn5ulvXe9t+8PnB08Y+ByjHwLwc2VXX3Z/7/nTr1ePfAxSjb14O76jrj/cPvLeWF6C/Pnl56d33ht/bHe8UoCytefnh+i9HuXfb4RP7Uh7wv9D2TwG7Lh2pLtXBz8a7BShKW14mfxzxZo+mgf5a8vLRp6PeLC9Afy15eXvkm78b4xCgNC1/nP1ppBsv7HSuOnfMY4CStOTll2H3zFrW6axZmFgDFKQlL+dvG/D5Uy7rdFbOj80BytGSl9s39fnsvOWrOleeGp0DlKMlL9cu2vPvi2esWLNyeX4OUI62791uuLV5Xrh69apLTsoaoCBtX6u75Yrm+bcVD6oLMF2tbwp4ref89NCHSQC9WvNy8d3N8x+Pn4wpQFna33P0XM+j59d3n4QpQFna83LmE83z0XtPwhSgLH3e0vjQec1zvSU/BShLn7zMfaXnwsNTrZ8D6KffO6Zv6jTPezfEpwBl6fsK+40TzfM6D6eBaembl6WTzfOBx9JTgLL0zUv1bM/D6Te/Ck8BytI/LwueaZ6PTrZ/DqBV/7xU9y9pnrdvzk4ByjIgL7Nf7rnw6KHoFKAsA/JSXXdN87z3hegUoCyD8lK9Ort5Xr8vOQUoy8C8LLmveT6wNjkFKMvAvFRPLWieN3k4DYxqcF4WrOu54OE0MKrBeakmlzbP29/JTQHKMiQvszf2XHjEw2lgNEPyUnVuaJ73rY9NAcoyLC/Vi3Mbx9W3xaYAZRmalyUPHHdYvOXDi4JjgJIMzUv15D8Pp+c/v/vm6BigJMPzMv/5Y5+869u1XjANjGx4Xqp7llZVVa344o2z0mOAkoyQl4mNVbVo89Zl+TFASdpeYd+rc8cFXtMITNcoeaneSq8ACjTCL0cAJ0JegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiZqM5ePNMbgPIc2jnTC4By/Q3MAosWz4PcNQAAAABJRU5ErkJggg=="
        ></image>
        <mask id="e8f5defe8d">
          <g filter="url(#3d3169bcde)">
            <g
              filter="url(#b3d96a1c6b)"
              transform="matrix(.23932 0 0 .23932 2.465 2.437)"
            >
              <image
                width="1118"
                height="163"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABF4AAACjCAAAAACWbIX3AAAAAmJLR0QA/4ePzL8AAATWSURBVHic7d1LiFV1AMfxMz4qJAmFolokiEXYwuhBmHo1qBbRg6h2RRAFE9ELClsUPaQMwqgWGUQEGS1cuGrb61wrzaxwIQVtNMoeFFhhyoi2kfDczn2M3J9D/z6f3f/MPfBbfWHm3OFUFQDAf8lEdef6md4AlOf7y6s51bxzZnoGUJ6pqpo10xuAUskLECIvQIi8ACHyAoTICxAiL0DInBO6a2pHt96/dcxTgLJMPy8HP6nrbX9VVfXn6eOfA5Rjenn5vVvXO6eOHd6/cfxzgHKMnpdfP6i7u44cd6ErL8AAo+VlT92tv+m9WI99DFCS4Xn5ulvXe9t+8PnB08Y+ByjHwLwc2VXX3Z/7/nTr1ePfAxSjb14O76jrj/cPvLeWF6C/Pnl56d33ht/bHe8UoCytefnh+i9HuXfb4RP7Uh7wv9D2TwG7Lh2pLtXBz8a7BShKW14mfxzxZo+mgf5a8vLRp6PeLC9Afy15eXvkm78b4xCgNC1/nP1ppBsv7HSuOnfMY4CStOTll2H3zFrW6axZmFgDFKQlL+dvG/D5Uy7rdFbOj80BytGSl9s39fnsvOWrOleeGp0DlKMlL9cu2vPvi2esWLNyeX4OUI62791uuLV5Xrh69apLTsoaoCBtX6u75Yrm+bcVD6oLMF2tbwp4ref89NCHSQC9WvNy8d3N8x+Pn4wpQFna33P0XM+j59d3n4QpQFna83LmE83z0XtPwhSgLH3e0vjQec1zvSU/BShLn7zMfaXnwsNTrZ8D6KffO6Zv6jTPezfEpwBl6fsK+40TzfM6D6eBaembl6WTzfOBx9JTgLL0zUv1bM/D6Te/Ck8BytI/LwueaZ6PTrZ/DqBV/7xU9y9pnrdvzk4ByjIgL7Nf7rnw6KHoFKAsA/JSXXdN87z3hegUoCyD8lK9Ort5Xr8vOQUoy8C8LLmveT6wNjkFKMvAvFRPLWieN3k4DYxqcF4WrOu54OE0MKrBeakmlzbP29/JTQHKMiQvszf2XHjEw2lgNEPyUnVuaJ73rY9NAcoyLC/Vi3Mbx9W3xaYAZRmalyUPHHdYvOXDi4JjgJIMzUv15D8Pp+c/v/vm6BigJMPzMv/5Y5+869u1XjANjGx4Xqp7llZVVa344o2z0mOAkoyQl4mNVbVo89Zl+TFASdpeYd+rc8cFXtMITNcoeaneSq8ACjTCL0cAJ0JegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiRFyBEXoAQeQFC5AUIkRcgRF6AEHkBQuQFCJEXIERegBB5AULkBQiZqM5ePNMbgPIc2jnTC4By/Q3MAosWz4PcNQAAAABJRU5ErkJggg=="
              ></image>
            </g>
          </g>
        </mask>
        <image
          width="1118"
          height="163"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABF4AAACjCAIAAAA8ZU18AAAABmJLR0QA/wD/AP+gvaeTAAACKUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAewNYqQABK0e8VwAAAABJRU5ErkJggg=="
        ></image>
        <clipPath id="772d386195">
          <path d="M0 0H274V44H0z"></path>
        </clipPath>
        <clipPath id="c4f43dfcec">
          <path d="M0 0H274V44H0z"></path>
        </clipPath>
        <mask id="742a891bbe">
          <g filter="url(#3d3169bcde)">
            <g clipPath="url(#c4f43dfcec)">
              <g clipPath="url(#bada5d3f98)">
                <g clipPath="url(#772d386195)">
                  <g clipPath="url(#b4b1b3332b)" mask="url(#e8f5defe8d)">
                    <image
                      width="1118"
                      height="163"
                      transform="matrix(.23932 0 0 .23932 2.465 2.437)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABF4AAACjCAIAAAA8ZU18AAAABmJLR0QA/wD/AP+gvaeTAAACKUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAewNYqQABK0e8VwAAAABJRU5ErkJggg=="
                    ></image>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </mask>
        <clipPath id="adce8596a7">
          <path d="M.656.262H273.63V43.64H.656zm0 0"></path>
        </clipPath>
        <clipPath id="2073d16af9">
          <path d="M0 0H274V44H0z"></path>
        </clipPath>
        <clipPath id="d5f8e5b88e">
          <path d="M0 0H274V44H0z"></path>
        </clipPath>
        <clipPath id="3fba6ffe10">
          <path d="M147.629 129.262h81.601v38.808H147.63zm0 0"></path>
        </clipPath>
        <clipPath id="1810378f49">
          <path d="M147.64 129.262h81.579v38.8H147.64zm0 0"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#11115f9c87)">
        <g clipPath="url(#3f2399b575)">
          <path
            fill="none"
            stroke="#000"
            strokeWidth="5.983"
            d="M21.2 38.809C9.722 38.809.421 48.113.421 59.586c0 11.476 9.3 20.777 20.777 20.777 11.473 0 20.778-9.3 20.778-20.777 0-11.473-9.305-20.777-20.778-20.777zm0 0"
          ></path>
        </g>
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2.891"
        d="M21.2 80.375v36.926M3.848 95.883h34.71"
      ></path>
      <g clipPath="url(#62f6a19a58)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="2.891"
          d="M21.195 117.297L3.84 142.074"
        ></path>
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2.891"
        d="M22.371 117.281l17.352 23.946"
      ></path>
      <g clipPath="url(#accb11d0be)">
        <g clipPath="url(#cab911cc2f)">
          <path
            fill="none"
            stroke="#000"
            strokeWidth="5.983"
            d="M355.648 38.809c-11.472 0-20.773 9.304-20.773 20.777 0 11.476 9.3 20.777 20.773 20.777 11.477 0 20.778-9.3 20.778-20.777 0-11.473-9.301-20.777-20.778-20.777zm0 0"
          ></path>
        </g>
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2.891"
        d="M355.648 80.375v36.926M338.3 95.883h34.712M355.648 117.297l-17.355 24.777M356.824 117.281l17.352 23.946"
      ></path>
      <g clipPath="url(#f58acb4c79)" transform="translate(50 32)">
        <g clipPath="url(#ca732a192f)">
          <g clipPath="url(#2f1b45e4d3)" mask="url(#d402bc0e30)">
            <g clipPath="url(#6dc446b0a7)">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="3.739"
                d="M9.219 36.453C94.816-.328 180.414-.567 266.012 35.738"
              ></path>
            </g>
          </g>
          <g clipPath="url(#387836047a)" mask="url(#d19e370ac2)">
            <g clipPath="url(#7c10b27d3e)">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="3.739"
                d="M9.219 36.453C94.816-.328 180.414-.567 266.012 35.738"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.739"
        d="M311.308 59.61l4.657 8.105-9.086 2.2"
      ></path>
      <g clipPath="url(#8ba8852414)">
        <path fill="#7ed957" d="M138.95 0h81.558v38.809h-81.559zm0 0"></path>
      </g>
      <g clipPath="url(#adebba9833)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="1.496"
          d="M138.96 0h81.58v38.797h-81.58zm0 0"
        ></path>
      </g>
      <path
        d="M8.563-3.031c0 .586-.122 1.105-.36 1.562-.242.461-.61.828-1.11 1.11-.491.28-1.1.445-1.827.5v1.593H4.172V.125C3.316.039 2.598-.18 2.016-.547 1.43-.922 1.008-1.363.75-1.875l.703-.844h.188c.582.969 1.425 1.528 2.53 1.672v-4.172l-.312-.078C2.9-5.523 2.191-5.89 1.734-6.39c-.449-.507-.671-1.148-.671-1.921 0-.5.117-.954.359-1.36.25-.406.601-.734 1.062-.984.47-.258 1.032-.414 1.688-.469v-1.578h1.094v1.594c1.3.105 2.25.562 2.843 1.375l-.625.843h-.187a3.044 3.044 0 00-.89-.734 3.358 3.358 0 00-1.141-.344v3.75l.265.063c1.063.25 1.832.636 2.313 1.156.476.512.718 1.168.718 1.969zm-6.22-5.313c0 .492.141.883.423 1.172.28.293.75.524 1.406.688v-3.5c-.606.062-1.063.242-1.375.53-.305.282-.453.653-.453 1.11zM5.267-1.03c.664-.063 1.16-.258 1.484-.594.332-.344.5-.79.5-1.344 0-.344-.063-.64-.188-.89s-.335-.461-.625-.641c-.28-.176-.671-.328-1.171-.453zm0 0"
        transform="translate(161.333 25.174)"
      ></path>
      <path
        d="M.656-.5c0-.602.067-1.086.203-1.453.133-.375.36-.723.672-1.047.32-.32.836-.738 1.547-1.25l1.203-.875c.446-.32.805-.617 1.078-.89.282-.282.504-.583.672-.907.164-.32.25-.687.25-1.094 0-.644-.18-1.132-.531-1.468-.344-.332-.883-.5-1.61-.5-.585 0-1.1.136-1.546.406-.45.273-.809.656-1.078 1.156l-.172.031-.782-.812a4.148 4.148 0 011.454-1.422c.601-.344 1.312-.516 2.125-.516.78 0 1.425.137 1.937.407.52.261.899.625 1.14 1.093.25.47.376 1.012.376 1.625A3.1 3.1 0 017.28-6.64c-.21.43-.5.829-.875 1.204A12.35 12.35 0 015-4.25l-1.219.89c-.46.337-.812.622-1.062.86a2.867 2.867 0 00-.531.688 1.562 1.562 0 00-.172.75h5.578V0H.656zm0 0"
        transform="translate(170.742 25.174)"
      ></path>
      <path
        d="M.781 0v-1.063h3v-8.39L3.61-9.5c-.492.242-.918.422-1.28.547-.368.125-.837.25-1.407.375v-1.188a13.761 13.761 0 001.672-.484 8.652 8.652 0 001.515-.719h.922v9.906H7.72V0zm0 0"
        transform="translate(179.182 25.174)"
      ></path>
      <path
        d="M5.39.156c-.804 0-1.527-.191-2.171-.578-.637-.383-1.149-1-1.531-1.844-.375-.843-.563-1.914-.563-3.218 0-1.301.188-2.375.563-3.22.382-.843.894-1.456 1.53-1.843a4.075 4.075 0 012.173-.594c.812 0 1.535.2 2.171.594.645.387 1.157 1 1.532 1.844.375.844.562 1.918.562 3.219 0 1.304-.187 2.375-.562 3.218-.375.844-.887 1.461-1.531 1.844-.637.387-1.36.578-2.172.578zm0-1.187c.958 0 1.68-.344 2.173-1.032.5-.687.75-1.828.75-3.421 0-1.594-.25-2.735-.75-3.422-.493-.688-1.215-1.031-2.172-1.031-.625 0-1.157.148-1.594.437-.43.293-.758.766-.985 1.422-.218.648-.328 1.512-.328 2.594 0 1.074.11 1.937.329 2.593.226.657.554 1.133.984 1.422.437.293.969.438 1.594.438zm0 0"
        transform="translate(187.367 25.174)"
      ></path>
      <g clipPath="url(#81941c11b7)">
        <path
          fill="#7ed957"
          d="M161.566 29.64h81.559v38.813h-81.559zm0 0"
        ></path>
      </g>
      <g clipPath="url(#626c83d8f7)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="1.496"
          d="M161.578 29.64h81.578v38.801h-81.578zm0 0"
        ></path>
      </g>
      <path
        d="M8.563-3.031c0 .586-.122 1.105-.36 1.562-.242.461-.61.828-1.11 1.11-.491.28-1.1.445-1.827.5v1.593H4.172V.125C3.316.039 2.598-.18 2.016-.547 1.43-.922 1.008-1.363.75-1.875l.703-.844h.188c.582.969 1.425 1.528 2.53 1.672v-4.172l-.312-.078C2.9-5.523 2.191-5.89 1.734-6.39c-.449-.507-.671-1.148-.671-1.921 0-.5.117-.954.359-1.36.25-.406.601-.734 1.062-.984.47-.258 1.032-.414 1.688-.469v-1.578h1.094v1.594c1.3.105 2.25.562 2.843 1.375l-.625.843h-.187a3.044 3.044 0 00-.89-.734 3.358 3.358 0 00-1.141-.344v3.75l.265.063c1.063.25 1.832.636 2.313 1.156.476.512.718 1.168.718 1.969zm-6.22-5.313c0 .492.141.883.423 1.172.28.293.75.524 1.406.688v-3.5c-.606.062-1.063.242-1.375.53-.305.282-.453.653-.453 1.11zM5.267-1.03c.664-.063 1.16-.258 1.484-.594.332-.344.5-.79.5-1.344 0-.344-.063-.64-.188-.89s-.335-.461-.625-.641c-.28-.176-.671-.328-1.171-.453zm0 0"
        transform="translate(185.249 54.816)"
      ></path>
      <path
        d="M.781 0v-1.063h3v-8.39L3.61-9.5c-.492.242-.918.422-1.28.547-.368.125-.837.25-1.407.375v-1.188a13.761 13.761 0 001.672-.484 8.652 8.652 0 001.515-.719h.922v9.906H7.72V0zm0 0"
        transform="translate(194.658 54.816)"
      ></path>
      <path
        d="M.656-.5c0-.602.067-1.086.203-1.453.133-.375.36-.723.672-1.047.32-.32.836-.738 1.547-1.25l1.203-.875c.446-.32.805-.617 1.078-.89.282-.282.504-.583.672-.907.164-.32.25-.687.25-1.094 0-.644-.18-1.132-.531-1.468-.344-.332-.883-.5-1.61-.5-.585 0-1.1.136-1.546.406-.45.273-.809.656-1.078 1.156l-.172.031-.782-.812a4.148 4.148 0 011.454-1.422c.601-.344 1.312-.516 2.125-.516.78 0 1.425.137 1.937.407.52.261.899.625 1.14 1.093.25.47.376 1.012.376 1.625A3.1 3.1 0 017.28-6.64c-.21.43-.5.829-.875 1.204A12.35 12.35 0 015-4.25l-1.219.89c-.46.337-.812.622-1.062.86a2.867 2.867 0 00-.531.688 1.562 1.562 0 00-.172.75h5.578V0H.656zm0 0"
        transform="translate(202.843 54.816)"
      ></path>
      <path
        d="M.781 0v-1.063h3v-8.39L3.61-9.5c-.492.242-.918.422-1.28.547-.368.125-.837.25-1.407.375v-1.188a13.761 13.761 0 001.672-.484 8.652 8.652 0 001.515-.719h.922v9.906H7.72V0zm0 0"
        transform="translate(211.283 54.816)"
      ></path>
      <path
        d="M3.422 0H2v-13.188h2.297L8.28-2.015h.203l3.985-11.171h2.219V0h-1.47v-10.766l-.218-.03L9.094 0H7.563L3.655-10.797l-.234.031zm0 0"
        transform="translate(10.886 166.437)"
      ></path>
      <path
        d="M9.484-4.64H2.641c.039 1.21.328 2.1.859 2.671.54.563 1.281.844 2.219.844.718 0 1.289-.125 1.718-.375.438-.258.774-.66 1.016-1.203h.188l.968.578A3.62 3.62 0 018.22-.422c-.637.406-1.469.61-2.5.61-.961 0-1.79-.188-2.485-.563-.687-.383-1.218-.957-1.593-1.719-.368-.77-.547-1.726-.547-2.875 0-1.133.191-2.086.578-2.86.394-.769.93-1.347 1.61-1.734.687-.382 1.472-.578 2.359-.578 1.27 0 2.257.36 2.968 1.079.72.718 1.082 1.789 1.094 3.203 0 .554-.012.921-.031 1.109zM8.25-5.86c-.023-1.062-.258-1.831-.703-2.312-.45-.476-1.086-.719-1.906-.719-.875 0-1.563.246-2.063.735-.492.48-.793 1.246-.906 2.297zm0 0"
        transform="translate(27.572 166.437)"
      ></path>
      <path
        d="M6.938.188C5.832.188 4.851-.063 4-.563c-.844-.508-1.508-1.27-1.984-2.282-.47-1.02-.704-2.27-.704-3.75 0-1.476.254-2.722.766-3.734.508-1.02 1.211-1.781 2.11-2.281.906-.508 1.945-.766 3.125-.766 1.257 0 2.296.23 3.109.688.812.449 1.383 1.124 1.719 2.03l-1 .595h-.235c-.344-.688-.808-1.176-1.39-1.47-.586-.3-1.32-.452-2.204-.452-2.898 0-4.343 1.796-4.343 5.39 0 1.875.363 3.246 1.094 4.11.726.855 1.75 1.28 3.062 1.28 1.195 0 2.094-.269 2.688-.812.601-.55.906-1.421.906-2.609v-1.156h-3.75v-1.25h5.265V0h-1.437v-1.766l-.188-.046c-.355.68-.843 1.183-1.468 1.515-.618.32-1.352.484-2.204.484zm0 0"
        transform="translate(337.98 166.437)"
      ></path>
      <path
        d="M1.734 0v-9.953h1.391v1.562l.188.047c.468-1.125 1.343-1.687 2.624-1.687.676 0 1.18.12 1.516.36l-.375 1.25-.172.03a2.729 2.729 0 00-1.234-.28c-.793 0-1.402.304-1.828.905-.43.594-.64 1.559-.64 2.891V0zm0 0"
        transform="translate(351.682 166.437)"
      ></path>
      <path
        d="M9.484-4.64H2.641c.039 1.21.328 2.1.859 2.671.54.563 1.281.844 2.219.844.718 0 1.289-.125 1.718-.375.438-.258.774-.66 1.016-1.203h.188l.968.578A3.62 3.62 0 018.22-.422c-.637.406-1.469.61-2.5.61-.961 0-1.79-.188-2.485-.563-.687-.383-1.218-.957-1.593-1.719-.368-.77-.547-1.726-.547-2.875 0-1.133.191-2.086.578-2.86.394-.769.93-1.347 1.61-1.734.687-.382 1.472-.578 2.359-.578 1.27 0 2.257.36 2.968 1.079.72.718 1.082 1.789 1.094 3.203 0 .554-.012.921-.031 1.109zM8.25-5.86c-.023-1.062-.258-1.831-.703-2.312-.45-.476-1.086-.719-1.906-.719-.875 0-1.563.246-2.063.735-.492.48-.793 1.246-.906 2.297zm0 0"
        transform="translate(359.362 166.437)"
      ></path>
      <path
        d="M5.125 4.219c-1.574 0-2.719-.262-3.438-.782C.97 2.914.61 2.224.61 1.36c0-.562.164-1.011.5-1.343.332-.332.82-.567 1.47-.704V-.89a1.89 1.89 0 01-.688-.593 1.504 1.504 0 01-.235-.844c0-.383.117-.695.36-.938.25-.25.613-.437 1.093-.562v-.188c-1.086-.57-1.625-1.5-1.625-2.78 0-.657.145-1.235.438-1.735.3-.5.723-.89 1.266-1.172.55-.29 1.19-.438 1.921-.438.832 0 1.532.184 2.094.547a2.44 2.44 0 00.469-.734c.101-.27.172-.578.203-.922l.188-.11 1.203.282c-.055.512-.204.945-.454 1.297-.242.344-.585.633-1.03.86v.187c.32.25.554.546.702.89.157.336.235.727.235 1.172 0 .637-.153 1.203-.453 1.703-.305.492-.73.883-1.282 1.172-.543.281-1.168.422-1.875.422a9.14 9.14 0 01-.453-.016c-.242-.007-.418-.015-.531-.015-.313 0-.563.086-.75.25a.756.756 0 00-.281.61c0 .312.097.546.297.702.207.149.539.227 1 .235l2.359.078c1.008.043 1.758.281 2.25.718.488.438.734 1.051.734 1.844 0 .602-.164 1.14-.484 1.61-.313.476-.82.859-1.516 1.14-.687.29-1.558.438-2.609.438zm-.016-8.86c.696 0 1.239-.18 1.625-.546.383-.364.579-.88.579-1.547 0-.676-.196-1.204-.579-1.579-.375-.374-.918-.562-1.625-.562-.71 0-1.25.188-1.625.563-.375.367-.562.89-.562 1.578 0 .68.187 1.199.562 1.562.375.356.914.531 1.625.531zm.016 7.594c.727 0 1.328-.086 1.797-.25.469-.156.8-.371 1-.64a1.4 1.4 0 00.312-.891c0-.293-.058-.531-.171-.719C7.957.273 7.78.141 7.53.047c-.25-.082-.59-.14-1.015-.172l-2.22-.094h-.312C2.734-.207 2.11.27 2.11 1.22c0 1.156 1.004 1.734 3.016 1.734zm0 0"
        transform="translate(369.963 166.437)"
      ></path>
      <g clipPath="url(#0f9e1a55f3)">
        <path fill="#7ed957" d="M389.71 80.223h81.56v38.812h-81.56zm0 0"></path>
      </g>
      <g clipPath="url(#f7b2b891a4)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="1.496"
          d="M389.719 80.223h81.578v38.8h-81.578zm0 0"
        ></path>
      </g>
      <path
        d="M8.563-3.031c0 .586-.122 1.105-.36 1.562-.242.461-.61.828-1.11 1.11-.491.28-1.1.445-1.827.5v1.593H4.172V.125C3.316.039 2.598-.18 2.016-.547 1.43-.922 1.008-1.363.75-1.875l.703-.844h.188c.582.969 1.425 1.528 2.53 1.672v-4.172l-.312-.078C2.9-5.523 2.191-5.89 1.734-6.39c-.449-.507-.671-1.148-.671-1.921 0-.5.117-.954.359-1.36.25-.406.601-.734 1.062-.984.47-.258 1.032-.414 1.688-.469v-1.578h1.094v1.594c1.3.105 2.25.562 2.843 1.375l-.625.843h-.187a3.044 3.044 0 00-.89-.734 3.358 3.358 0 00-1.141-.344v3.75l.265.063c1.063.25 1.832.636 2.313 1.156.476.512.718 1.168.718 1.969zm-6.22-5.313c0 .492.141.883.423 1.172.28.293.75.524 1.406.688v-3.5c-.606.062-1.063.242-1.375.53-.305.282-.453.653-.453 1.11zM5.267-1.03c.664-.063 1.16-.258 1.484-.594.332-.344.5-.79.5-1.344 0-.344-.063-.64-.188-.89s-.335-.461-.625-.641c-.28-.176-.671-.328-1.171-.453zm0 0"
        transform="translate(413.03 105.398)"
      ></path>
      <path
        d="M.656-.5c0-.602.067-1.086.203-1.453.133-.375.36-.723.672-1.047.32-.32.836-.738 1.547-1.25l1.203-.875c.446-.32.805-.617 1.078-.89.282-.282.504-.583.672-.907.164-.32.25-.687.25-1.094 0-.644-.18-1.132-.531-1.468-.344-.332-.883-.5-1.61-.5-.585 0-1.1.136-1.546.406-.45.273-.809.656-1.078 1.156l-.172.031-.782-.812a4.148 4.148 0 011.454-1.422c.601-.344 1.312-.516 2.125-.516.78 0 1.425.137 1.937.407.52.261.899.625 1.14 1.093.25.47.376 1.012.376 1.625A3.1 3.1 0 017.28-6.64c-.21.43-.5.829-.875 1.204A12.35 12.35 0 015-4.25l-1.219.89c-.46.337-.812.622-1.062.86a2.867 2.867 0 00-.531.688 1.562 1.562 0 00-.172.75h5.578V0H.656zm0 0"
        transform="translate(422.44 105.398)"
      ></path>
      <path
        d="M4.344.156c-1.063 0-1.907-.238-2.532-.719-.625-.476-1.03-1.144-1.218-2L1.547-3l.187.031c.188.656.477 1.153.875 1.485.395.324.973.484 1.735.484.781 0 1.375-.176 1.781-.531.406-.364.61-.89.61-1.578 0-.676-.212-1.192-.626-1.547-.418-.352-1.07-.532-1.953-.532H2.97V-6.25H4.03c.688 0 1.235-.172 1.64-.516.415-.343.626-.828.626-1.453 0-.594-.18-1.035-.531-1.328C5.41-9.847 4.914-10 4.28-10c-1.105 0-1.89.438-2.36 1.313l-.187.03-.718-.78c.3-.508.726-.922 1.28-1.235.552-.312 1.212-.469 1.985-.469.696 0 1.29.11 1.782.329.5.218.875.539 1.125.953.257.406.39.898.39 1.468 0 .543-.156 1.016-.469 1.422-.312.407-.73.73-1.25.969v.156c.727.18 1.274.508 1.641.985.363.468.547 1.054.547 1.75 0 1.043-.313 1.851-.938 2.421-.617.563-1.539.844-2.765.844zm0 0"
        transform="translate(430.88 105.398)"
      ></path>
      <path
        d="M.781 0v-1.063h3v-8.39L3.61-9.5c-.492.242-.918.422-1.28.547-.368.125-.837.25-1.407.375v-1.188a13.761 13.761 0 001.672-.484 8.652 8.652 0 001.515-.719h.922v9.906H7.72V0zm0 0"
        transform="translate(439.8 105.398)"
      ></path>
      <g clipPath="url(#d5f8e5b88e)" transform="translate(53 111)">
        <g clipPath="url(#71bceb8b59)">
          <g clipPath="url(#55f8f08a10)" mask="url(#7c072d2930)">
            <g clipPath="url(#972db64a89)">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="3.739"
                d="M265.41 8.023C179.813 44.801 94.215 45.04 8.617 8.734"
              ></path>
            </g>
          </g>
          <g clipPath="url(#2073d16af9)" mask="url(#742a891bbe)">
            <g clipPath="url(#adce8596a7)">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="3.739"
                d="M265.41 8.023C179.813 44.801 94.215 45.04 8.617 8.734"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.739"
        d="M66.324 127.867l-4.656-8.105 9.082-2.203"
      ></path>
      <g clipPath="url(#3fba6ffe10)">
        <path
          fill="#7ed957"
          d="M147.629 129.262h81.559v38.808h-81.56zm0 0"
        ></path>
      </g>
      <g clipPath="url(#1810378f49)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="1.496"
          d="M147.64 129.262h81.579v38.8H147.64zm0 0"
        ></path>
      </g>
      <g>
        <path
          d="M8.563-3.031c0 .586-.122 1.105-.36 1.562-.242.461-.61.828-1.11 1.11-.491.28-1.1.445-1.827.5v1.593H4.172V.125C3.316.039 2.598-.18 2.016-.547 1.43-.922 1.008-1.363.75-1.875l.703-.844h.188c.582.969 1.425 1.528 2.53 1.672v-4.172l-.312-.078C2.9-5.523 2.191-5.89 1.734-6.39c-.449-.507-.671-1.148-.671-1.921 0-.5.117-.954.359-1.36.25-.406.601-.734 1.062-.984.47-.258 1.032-.414 1.688-.469v-1.578h1.094v1.594c1.3.105 2.25.562 2.843 1.375l-.625.843h-.187a3.044 3.044 0 00-.89-.734 3.358 3.358 0 00-1.141-.344v3.75l.265.063c1.063.25 1.832.636 2.313 1.156.476.512.718 1.168.718 1.969zm-6.22-5.313c0 .492.141.883.423 1.172.28.293.75.524 1.406.688v-3.5c-.606.062-1.063.242-1.375.53-.305.282-.453.653-.453 1.11zM5.267-1.03c.664-.063 1.16-.258 1.484-.594.332-.344.5-.79.5-1.344 0-.344-.063-.64-.188-.89s-.335-.461-.625-.641c-.28-.176-.671-.328-1.171-.453zm0 0"
          transform="translate(168.822 154.437)"
        ></path>
      </g>
      <g>
        <path
          d="M.781 0v-1.063h3v-8.39L3.61-9.5c-.492.242-.918.422-1.28.547-.368.125-.837.25-1.407.375v-1.188a13.761 13.761 0 001.672-.484 8.652 8.652 0 001.515-.719h.922v9.906H7.72V0zm0 0"
          transform="translate(178.231 154.437)"
        ></path>
      </g>
      <g>
        <path
          d="M5.39.156c-.804 0-1.527-.191-2.171-.578-.637-.383-1.149-1-1.531-1.844-.375-.843-.563-1.914-.563-3.218 0-1.301.188-2.375.563-3.22.382-.843.894-1.456 1.53-1.843a4.075 4.075 0 012.173-.594c.812 0 1.535.2 2.171.594.645.387 1.157 1 1.532 1.844.375.844.562 1.918.562 3.219 0 1.304-.187 2.375-.562 3.218-.375.844-.887 1.461-1.531 1.844-.637.387-1.36.578-2.172.578zm0-1.187c.958 0 1.68-.344 2.173-1.032.5-.687.75-1.828.75-3.421 0-1.594-.25-2.735-.75-3.422-.493-.688-1.215-1.031-2.172-1.031-.625 0-1.157.148-1.594.437-.43.293-.758.766-.985 1.422-.218.648-.328 1.512-.328 2.594 0 1.074.11 1.937.329 2.593.226.657.554 1.133.984 1.422.437.293.969.438 1.594.438zm0 0"
          transform="translate(186.416 154.437)"
        ></path>
      </g>
      <g>
        <path
          d="M5.39.156c-.804 0-1.527-.191-2.171-.578-.637-.383-1.149-1-1.531-1.844-.375-.843-.563-1.914-.563-3.218 0-1.301.188-2.375.563-3.22.382-.843.894-1.456 1.53-1.843a4.075 4.075 0 012.173-.594c.812 0 1.535.2 2.171.594.645.387 1.157 1 1.532 1.844.375.844.562 1.918.562 3.219 0 1.304-.187 2.375-.562 3.218-.375.844-.887 1.461-1.531 1.844-.637.387-1.36.578-2.172.578zm0-1.187c.958 0 1.68-.344 2.173-1.032.5-.687.75-1.828.75-3.421 0-1.594-.25-2.735-.75-3.422-.493-.688-1.215-1.031-2.172-1.031-.625 0-1.157.148-1.594.437-.43.293-.758.766-.985 1.422-.218.648-.328 1.512-.328 2.594 0 1.074.11 1.937.329 2.593.226.657.554 1.133.984 1.422.437.293.969.438 1.594.438zm0 0"
          transform="translate(197.215 154.437)"
        ></path>
      </g>
    </svg>
  );
};

export default UTXO;
