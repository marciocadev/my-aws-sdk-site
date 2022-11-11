import { Divider } from './Divider';
import { SideBarAwsSvg } from './SideBarAwsSvg';
import appconfig from '../../svg/Arch_AWS-AppConfig_64.svg';
import s3 from '../../svg/Arch_Amazon-Simple-Storage-Service_64.svg';
import secrets from '../../svg/Arch_AWS-Secrets-Manager_64.svg';
import ssm from '../../svg/Arch_AWS-Systems-Manager_64.svg';
import aurora from '../../svg/Arch_Amazon-Aurora_64.svg';
import comprehend from '../../svg/Arch_Amazon-Comprehend_64.svg';
import { NavLink } from 'react-router-dom';


export const SideBar = () => {
  return (
    <div className="sidedbar">
      <NavLink end to="/ssm" className="block">
        <SideBarAwsSvg icon={ssm} text='Systems Manager (Parameter Store)' />
      </NavLink>
      
      <Divider />
      
      <NavLink end to="/appconfig" className="block">
        <SideBarAwsSvg icon={appconfig} text='App Config' />
      </NavLink>      
      
      <Divider />
      
      <NavLink end to="/s3" className="block">
        <SideBarAwsSvg icon={s3} text='Simple Storage Service (S3)' />
      </NavLink>
      
      <Divider />
      
      <NavLink end to="/secrets" className="block">
        <SideBarAwsSvg icon={secrets} text='Secrets Manager' />
      </NavLink>

      <Divider />

      <NavLink end to="/aurora" className="block">
        <SideBarAwsSvg icon={aurora} text='Aurora' />
      </NavLink>

      <Divider />

      <NavLink end to="/comprehend" className="block">
        <SideBarAwsSvg icon={comprehend} text='Comprehend' />
      </NavLink>
      
      {/* <SideBarIcon icon={<BsSun size='32' />} text='tooltip 💡' />
      <Divider />
      <SideBarIcon icon={<BsMoonStars size='32' />} text='teste1' />
      <Divider />
      <SideBarIcon icon={<BsSun size='32' />} text='teste2' />
      <Divider />
      <SideBarIcon icon={<BsMoonStars size='32' />} text='teste3' />
      <Divider /> */}

    </div>
  );
}
