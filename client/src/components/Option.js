import React, { useState, useEffect } from "react";

export default function Option(props) {

  return (
    <div>
      <button>{props.answer}</button>
    </div>
  );
}