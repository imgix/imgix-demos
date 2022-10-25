import Footer from './footer'
import Meta from './meta'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import { ReactNode } from 'react'

type LayoutProps = {
  preview: boolean,
  children: ReactNode,
};

const Layout = (props: LayoutProps) => {
  const {
    preview,
    children
  } = props;
  return (
    <div>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
export default Layout;
