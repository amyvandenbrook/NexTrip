import '@testing-library/jest-dom';
import '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import './App'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
