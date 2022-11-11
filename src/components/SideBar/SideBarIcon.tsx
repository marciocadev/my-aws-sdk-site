interface SideBarIconProps {
  icon: any;
  text: string;
}

export const SideBarIcon = (i: SideBarIconProps) => {
  return (
    <div className='sidebar-icon group'>
      {i.icon}
      <span className='sidebar-tooltip group-hover:scale-100 group-hover:block hidden'>
        {i.text}
      </span>
    </div>
  );
}