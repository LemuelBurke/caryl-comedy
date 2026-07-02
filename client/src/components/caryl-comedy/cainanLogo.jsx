export default function Logo({ fill = '#16171B', size = 24 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <path fill={fill} d="M57.20 95.43 A46 46 0 0 0 57.20 4.57 L54.54 21.36 A29 29 0 0 1 54.54 78.64 Z" />
      <path fill={fill} d="M42.80 4.57 A46 46 0 0 0 42.80 95.43 L45.46 78.64 A29 29 0 0 1 45.46 21.36 Z" />
    </svg>
  )
}