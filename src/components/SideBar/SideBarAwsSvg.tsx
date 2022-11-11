interface SideBarAwsIconProps {
  icon: any;
  text: string;
}

export const SideBarAwsSvg = (i: SideBarAwsIconProps) => {
  return (
    <div className='sidebar-aws-icon group'>
      <img src={i.icon} alt={i.text} className='sidebar-aws-icon-img' />
      <span className='sidebar-tooltip group-hover:scale-100 group-hover:block hidden'>
        {i.text}
      </span>
    </div>
  );
}
