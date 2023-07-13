import NavBar  from './core/components/header.tsx'
import Sidebar from './core/components/sidebar.tsx'
import { sample_header_list } from './sample_header.ts'

export function App() {
  const formSections:any = sample_header_list;
  return (
    
    <>
      <NavBar />
      <div className="mx-auto max-w-6xl">
        <div className="fixed top-16 bottom-16 hidden w-72 overflow-auto p-4 md:block">
          <Sidebar formSections={formSections} />
        </div>
        <div className="md:ml-72 p-4 pb-20 pt-24 overflow-auto ">
          TODO LIST
          <ol style={"list-style: auto"}>
            <li>Making the sidebar component navigation friendly</li>
            <li>Adding a dynamic form componnent compatible to each section</li>
            <li>adding a navigation bottom bar</li>
          </ol>

        </div>
      </div>
    </>
  )
}