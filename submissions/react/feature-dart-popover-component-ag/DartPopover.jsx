import "./style.css";

function DartPopover({ children = "Popover Content" }) {
  return (
    <div className="dart-popover-wrapper-ag">
      <button
        className="dart-trigger-ag"
        aria-describedby="dart-popover"
      >
        Hover Me
      </button>

      <div
        id="dart-popover"
        className="dart-popover-ag"
        role="tooltip"
      >
        {children}
      </div>
    </div>
  );
}

export default DartPopover;
