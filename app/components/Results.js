import React, { PropTypes } from 'react'
import Modal from 'react-modal'
import { customStyles } from '../config/constants.js'

const { object, number, func, bool } = PropTypes

const bd = {
  fontWeight: 'bold',
}

const addSpace = {
  marginTop: '10px',
}

function ListItem(props) {
  const animationDelay = `${2 + (props.idx * 10) / 100}s`
  return (
    <li style={{ animationDelay }} className='card'>
      <img alt={'Gif'} src={props.gif.images.fixed_height.url} />
    </li>
  )
}

ListItem.propTypes = {
  gif: object.isRequired,
  idx: number.isRequired,
}

function ModalUI(props) {
  return (
    <div className='modalContainer'>
      <img alt={'Poster'} src={props.modalData.Poster} className='modalPoster' />
      <div className='modalInfo'>
        <h2>{props.modalData.Title}</h2>
        <div>{props.modalData.Plot}</div>
        <ul style={addSpace}>
          <li><span style={bd}>{'Starring:'}</span> {props.modalData.Actors}</li>
          <li><span style={bd}>{'Release Date:'}</span> {props.modalData.Released}</li>
          <li><span style={bd}>{'Genre:'}</span> {props.modalData.Genre}</li>
        </ul>
      </div>
    </div>
  )
}

ModalUI.propTypes = {
  modalData: object.isRequired,
}


function Results(props) {
  return props.isLoading === true
    ? <div className='loading'> {'Loading'} </div>
    : <div>
      <ul className='list'>
        {props.gifData.map((gif, idx) =>
          <ListItem
            key={gif.id} idx={idx} gif={gif}
          />
        )}
      </ul>
      <Modal
        isOpen={props.modalOpen}
        style={customStyles}
        closeTimeoutMS={150}
        onRequestClose={props.closeModal}
      >
        <ModalUI modalData={props.modalData} />
      </Modal>
    </div>
}

Results.propTypes = {
  isLoading: bool.isRequired,
  modalOpen: bool.isRequired,
  closeModal: func.isRequired,
  makeDetailsRequest: func.isRequired,
  gifData: PropTypes.any.isRequired,
  modalData: object.isRequired,
}

module.exports = Results
