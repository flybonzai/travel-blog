import '../style/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitterSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {Form, Navbar} from 'react-bootstrap';

function Footer() {
  return (
    <Navbar className={'footer'} expand={'lg'}>
      <FontAwesomeIcon
        className={'link-icon'}
        icon={faFacebook}
        size={'3x'}
        color={'white'}
      />
      <FontAwesomeIcon
        className={'link-icon'}
        icon={faInstagram}
        size={'3x'}
        color={'white'}
      />
      <FontAwesomeIcon
        className={'link-icon'}
        icon={faTwitterSquare}
        size={'3x'}
        color={'white'}
      />
    </Navbar>
  );
}

export default Footer;