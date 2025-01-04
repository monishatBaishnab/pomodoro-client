'use client'
import React, { useEffect, useState } from "react";

type ProgressBarProps = {
  bgColor?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  labelAlignment?: "left" | "center" | "right" | "outside";
  baseBgColor?: string;
  labelColor?: string;
  labelSize?: string;
  isLabelVisible?: boolean;
  dir?: "ltr" | "rtl";
  ariaValuemin?: number;
  ariaValuemax?: number;
  ariaValuetext?: string | null;
  maxCompleted?: number;
  animateOnRender?: boolean;
  initCompletedOnAnimation?: number | string;
  isIndeterminate?: boolean;
  completed: number | string;
  margin?: string;
  padding?: string;
  customLabelStyles?: React.CSSProperties;
  transitionDuration?: string;
  transitionTimingFunction?: string;
  className?: string;
  customLabel?: string;
  barContainerClassName?: string;
  completedClassName?: string;
  labelClassName?: string;
  labelOutsideClassName?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  bgColor = "#6a1b9a",
  height = "8px",
  width = "100%",
  borderRadius = "50px",
  labelAlignment = "right",
  baseBgColor = "#e0e0de",
  labelColor = "#fff",
  labelSize = "15px",
  isLabelVisible = true,
  dir = "ltr",
  ariaValuemin = 0,
  ariaValuemax = 100,
  ariaValuetext = null,
  maxCompleted = 100,
  animateOnRender = false,
  initCompletedOnAnimation = 0,
  isIndeterminate = false,
  completed,
  margin,
  padding,
  customLabelStyles,
  transitionDuration = "1s",
  transitionTimingFunction = "ease-in-out",
  className,
  customLabel,
  barContainerClassName,
  completedClassName,
  labelClassName,
  labelOutsideClassName,
}) => {
  const getAlignment = (alignmentOption: string) => {
    switch (alignmentOption) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return null;
    }
  };

  const alignment = getAlignment(labelAlignment);
  const initCompletedOnAnimationStr =
    typeof initCompletedOnAnimation === "number"
      ? `${initCompletedOnAnimation}%`
      : initCompletedOnAnimation;

  const getFillerWidth = (maxCompletedValue: number, completedValue: string | number) => {
    if (maxCompletedValue) {
      const ratio = Number(completedValue) / maxCompletedValue;
      return ratio > 1 ? "100%" : `${ratio * 100}%`;
    }
    return initCompletedOnAnimationStr;
  };

  const fillerWidth = getFillerWidth(maxCompleted, completed);
  const [initWidth, setInitWidth] = useState(initCompletedOnAnimationStr);

  const containerStyles: React.CSSProperties = {
    height,
    background: baseBgColor,
    borderRadius,
    padding,
    width,
    margin,
    overflow: "hidden",
  };

  const fillerStyles: React.CSSProperties = {
    height,
    width: isIndeterminate ? "100%" : animateOnRender ? initWidth : fillerWidth,
    background: bgColor,
    transition: isIndeterminate
      ? "none"
      : `width ${transitionDuration} ${transitionTimingFunction}`,
    borderRadius: "inherit",
    display: "flex",
    alignItems: labelAlignment !== "outside" && alignment ? alignment : "normal",
    animation: isIndeterminate ? "indeterminate 1.5s infinite linear" : "none",
  };

  const labelStyles: React.CSSProperties = {
    padding: labelAlignment === "outside" ? "0 0 0 5px" : "5px",
    color: labelColor,
    fontWeight: "bold",
    fontSize: labelSize,
    display: !isLabelVisible ? "none" : "initial",
    ...customLabelStyles,
  };

  const outsideStyles: React.CSSProperties = {
    display: labelAlignment === "outside" ? "flex" : "initial",
    alignItems: labelAlignment === "outside" ? "center" : "initial",
  };

  const completedStr = typeof completed === "number" ? `${completed}%` : `${completed}`;
  const labelStr = customLabel ? customLabel : completedStr;

  useEffect(() => {
    if (animateOnRender && !isIndeterminate) {
      requestAnimationFrame(() => setInitWidth(fillerWidth));
    }
  }, [fillerWidth, animateOnRender, isIndeterminate]);

  return (
    <div
      style={className ? undefined : outsideStyles}
      className={`progress-bar-container ${className || ""}`}
      dir={dir}
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : parseFloat(labelStr)}
      aria-valuemin={ariaValuemin}
      aria-valuemax={ariaValuemax}
      aria-valuetext={ariaValuetext === null ? labelStr : ariaValuetext}
    >
      <div
        style={containerStyles}
        className={`progress-bar-background ${barContainerClassName || ""}`}
      >
        <div style={fillerStyles} className={`progress-bar-filler ${completedClassName || ""}`}>
          {labelAlignment !== "outside" && (
            <span
              style={labelClassName ? undefined : labelStyles}
              className={`progress-bar-label ${labelClassName || ""}`}
            >
              {labelStr}
            </span>
          )}
        </div>
      </div>
      {labelAlignment === "outside" && (
        <span
          style={labelClassName ? undefined : labelStyles}
          className={`progress-bar-label-outside ${labelOutsideClassName || ""}`}
        >
          {labelStr}
        </span>
      )}
      <style jsx>{`
        @keyframes indeterminate {
          0% {
            width: 30%;
            transform: translateX(-50%);
          }
          50% {
            width: 30%;
            transform: translateX(250%);
          }
          100% {
            width: 30%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;
