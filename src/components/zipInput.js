import React from 'react';

export default function ZipInput(props) {
  return (
    <div>
      <form onSubmit={e => { e.preventDefault(); props.onSubmit(e.target.zipcode.value) }}>
        <input type="text" name="zipcode" placeholder="ZipCode...." id="zipcode" />
        <button>Get State and City</button>
      </form>
    </div>
  )
}