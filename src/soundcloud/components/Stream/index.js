import { connect } from 'react-redux';
import Stream from '../Stream/presenter';

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  }
}

export default connect(mapStateToProps)(Stream);
