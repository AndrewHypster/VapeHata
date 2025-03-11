import Link from 'next/link'
import './link.css'

const A = ({href, text, color='white'}) => {
  return <Link href={href} className={`link link-${color}`}>{text}</Link>
}

const ABlock = ({href, children}) => {
  return <Link href={href} className={`link-block`}>{children}</Link>
}

export { A, ABlock }
