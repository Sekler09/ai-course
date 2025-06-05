import './styles.css'
const Task2Page = () => {
  return (
    <>
      <nav className="nav">
        <button className="hamburger" id="menuBtn">Menu</button>
        <ul className="menu" id="menu">
          <li>Home</li><li>About</li><li>Contact</li>
        </ul>
      </nav>
      <details>
        <summary>AI Explanation</summary>
        <div>
          The &quot;ghosting&quot; effect you&apos;re observing at the 768px breakpoint occurs because of how CSS transitions interact with media queries. Here&apos;s why it happens:
          <ul className='list-disc ml-4'>
            <li>Transition Property: In your styles.css, within the @media (max-width:768px) block, the .menu class has transition: .3s ease;. This tells the browser to animate any changes to animatable properties (like transform) over 0.3 seconds.</li>
            <li>Media Query Activation: When your screen width shrinks to 768px or less, the media query styles activate. The transform: translateY(-150%); rule is applied to .menu. Before this, in the desktop view (wider than 768px), .menu has no transform explicitly set, so it&apos;s effectively transform: none;.</li>
            <li>The change from transform: none to transform: translateY(-150%) is animated because of the transition: .3s ease; rule. This causes the menu to slide upwards off the screen - this is the &quot;ghosting out&quot;.</li>
            <li>Media Query Deactivation: If you resize the screen to be wider than 768px, the media query styles are removed. The transform: translateY(-150%); is no longer applied. The menu attempts to revert to its desktop state. This change from transform: translateY(-150%) back to transform: none can also be animated, causing the menu to slide back down into view - this is the &quot;ghosting in&quot;.</li>
            <li>At Exactly 768px: If the browser width hovers precisely at 768px, or if there are slight fluctuations in how the width is calculated during resize, the media query might rapidly toggle on and off. Each toggle triggers the 0.3s animation, leading to the continuous &quot;ghosting in and out&quot; effect.</li>
          </ul>
          To fix this with CSS only, you need to prevent the animation when the media query boundary is crossed, ideally while keeping the animation for when the menu is intentionally opened or closed using the .open class.

          The most straightforward way to stop the ghosting animation at the breakpoint is to ensure the initial transform: translateY(-150%) (the hidden state for mobile) is applied instantly, without a transition. This can be done by moving the transition to apply only when the .open class is active.
          </div>
      </details>
    </>

  )
}

export default Task2Page