import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { cn } from "../../../utils/cn";
import Button from "../Button";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <Button className={cn("p-0.5", className)} type="button" {...restProps}>
      <FaAngleLeft className="text-sm" />
      {children}
    </Button>
  );
};

export const NextButton = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <Button className={cn("p-0.5", className)} type="button" {...restProps}>
      <FaAngleRight className="text-sm" />
      {children}
    </Button>
  );
};

usePrevNextButtons.propTypes = {
  emblaApi: PropTypes.object.isRequired,
};
