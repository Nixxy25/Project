import { useMemo } from "react";
import "./ButtonPrimaryFalseDisabled.css";
const ButtonPrimaryFalseDisabled = ({
  label,
  showLabel,
  buttonPrimaryFalseDisablePosition,
  buttonPrimaryFalseDisableBorderRadius,
  buttonPrimaryFalseDisableBackgroundColor,
  buttonPrimaryFalseDisableWidth,
  buttonPrimaryFalseDisableTop,
  buttonPrimaryFalseDisableLeft,
  buttonPrimaryFalseDisableHeight,
  labelFontFamily,
  labelTop,
}) => {
  const buttonPrimaryFalseDisabledStyle = useMemo(() => {
    return {
      position: buttonPrimaryFalseDisablePosition,
      borderRadius: buttonPrimaryFalseDisableBorderRadius,
      backgroundColor: buttonPrimaryFalseDisableBackgroundColor,
      width: buttonPrimaryFalseDisableWidth,
      top: buttonPrimaryFalseDisableTop,
      left: buttonPrimaryFalseDisableLeft,
      height: buttonPrimaryFalseDisableHeight,
    };
  }, [
    buttonPrimaryFalseDisablePosition,
    buttonPrimaryFalseDisableBorderRadius,
    buttonPrimaryFalseDisableBackgroundColor,
    buttonPrimaryFalseDisableWidth,
    buttonPrimaryFalseDisableTop,
    buttonPrimaryFalseDisableLeft,
    buttonPrimaryFalseDisableHeight,
  ]);

  const labelStyle = useMemo(() => {
    return {
      fontFamily: labelFontFamily,
      top: labelTop,
    };
  }, [labelFontFamily, labelTop]);

  return (
    <div
      className="buttonprimaryfalsedisabled"
      style={buttonPrimaryFalseDisabledStyle}
    >
      {showLabel && (
        <div className="label" style={labelStyle}>
          {label}
        </div>
      )}
    </div>
  );
};

export default ButtonPrimaryFalseDisabled;
