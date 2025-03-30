
function NavBtn({title}:{title:string}) {
  return (
    <div className="relative after:absolute after:bg-gray-600 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:opacity-0 hover:after:translate-y-0 hover:after:opacity-100 after:transition after:ease-in-out after:duration-200">{title}</div>
  )
}

export default NavBtn