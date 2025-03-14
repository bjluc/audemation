export default function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute -inset-[10px] opacity-60">
        {" "}
        {/* Increased opacity from 50 to 60 */}
        <div className="absolute top-0 -left-[25%] w-[150%] h-[500px] bg-gradient-radial from-purple-500/25 to-transparent blur-3xl" />{" "}
        {/* Increased from /20 to /25 */}
        <div className="absolute bottom-0 -right-[25%] w-[150%] h-[500px] bg-gradient-radial from-indigo-500/25 to-transparent blur-3xl" />{" "}
        {/* Increased from /20 to /25 */}
      </div>
    </div>
  )
}

