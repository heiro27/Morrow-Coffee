type OrderDateIconProps = {
  className?: string;
};

export default function OrderDateIcon({
  className = "",
}: OrderDateIconProps) {
  return (
    <svg
      width="43"
      height="39"
      viewBox="0 0 43 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.1252 1.625V4.875H26.8752V1.625H30.4585V4.875H37.6252C38.6147 4.875 39.4168 5.60255 39.4168 6.5V32.5C39.4168 33.3975 38.6147 34.125 37.6252 34.125H5.37516C4.38566 34.125 3.5835 33.3975 3.5835 32.5V6.5C3.5835 5.60255 4.38566 4.875 5.37516 4.875H12.5418V1.625H16.1252ZM35.8335 17.875H7.16683V30.875H35.8335V17.875ZM12.5418 8.125H7.16683V14.625H35.8335V8.125H30.4585V11.375H26.8752V8.125H16.1252V11.375H12.5418V8.125Z"
        fill="#6B4F3A"
      />
    </svg>
  );
}