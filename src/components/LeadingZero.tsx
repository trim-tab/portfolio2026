import React from "react";

export default function leadingZero() {
  return function leadingZero(i: number) {
    if (i < 10) return "00";
    else if (i < 100) return "0";
  };
}
