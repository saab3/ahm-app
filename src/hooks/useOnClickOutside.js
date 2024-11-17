import { useEffect } from "react";

const useOnClickOutside = (ref, setShow) => {
  useEffect(() => {
    function handleClickOutside(event) {
      const isOutsideClick =
        ref.current &&
        !ref.current.contains(event.target) &&
        !isScrollbarClick(event);

      if (isOutsideClick) {
        setShow(false);
      }
    }

    function isScrollbarClick(event) {
      const tag = event?.target?.tagName?.toLowerCase();

      return tag === "html";
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useOnClickOutside;
