import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Blockies from 'react-blockies'

const PX_RATIO = typeof devicePixelRatio === 'undefined' ? 2 : devicePixelRatio
const BLOCKIES_SQUARES = 8

class Identicon extends React.Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    scale: PropTypes.number,
  }
  static defaultProps = {
    scale: 3,
  }
  render() {
    const { address, scale, className, style } = this.props
    return (
      <Main size={BLOCKIES_SQUARES * scale}>
        <Blockies
          seed={address}
          size={BLOCKIES_SQUARES}
          scale={scale * PX_RATIO}
        />
      </Main>
    )
  }
}

const Main = styled.div`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  transform: scale(${1 / PX_RATIO});
  transform-origin: 0 0;
`

export default Identicon
