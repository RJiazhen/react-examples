import { position } from 'caret-pos';
import {
  cloneElement,
  JSXElementConstructor,
  ReactElement,
  useRef,
  useState,
} from 'react';
import './index.scss';

type Props = {
  children:
    | React.ReactNode
    | ReactElement<any, string | JSXElementConstructor<any>>;
};

export const CaretPopup = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const triggerText = '#';

  const onInput = (e) => {
    const value: string = e.target.value;
    const newPopupPosition = (() => {
      if (!inputRef.current) return { x: 0, y: 0 };

      const caretPosition = position(inputRef.current);
      const inputMarginLeft = parseInt(
        window.getComputedStyle(inputRef.current).marginLeft,
      );
      const inputMarginTop = parseInt(
        window.getComputedStyle(inputRef.current).marginTop,
      );
      const inputMarginBottom = parseInt(
        window.getComputedStyle(inputRef.current).marginBottom,
      );
      const inputWidth = inputRef.current.getBoundingClientRect().width;
      const inputHeight =
        inputRef.current.getBoundingClientRect().height +
        inputMarginTop +
        inputMarginBottom;
      return {
        x: inputMarginLeft + Math.min(caretPosition.left, inputWidth),
        y: inputHeight,
      };
    })();
    setPopupPosition(newPopupPosition);

    if (!value.endsWith(triggerText)) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };

  const optionList = ['邮箱', '用户名'];

  const onClickOption = (option: string) => {
    if (!inputRef.current) return;
    inputRef.current.value += option;
    setIsOpen(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  // @ts-ignore
  // XXX complete type judgement of children
  const input =
    typeof children === 'function'
      ? children({ ref: inputRef, onInput })
      : cloneElement(children, { ref: inputRef, onInput });

  return (
    <div className="caret-popup-wrapper">
      {input}
      <div
        className={`caret-popup ${isOpen ? 'caret-popup__open' : ''}`}
        style={{
          top: popupPosition.y,
          left: popupPosition.x,
        }}
      >
        <ul>
          {optionList.map((option) => (
            <li
              key={option}
              onClick={() => onClickOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
