import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => setStatus(props.status), [props.status]);

  const activateMode = () => {
    setEditMode(true);
  }

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div>
      {
        editMode && <input value={status} onBlur={deactivateMode} onChange={onStatusChange} autoFocus={true}/>
      }
      {
        !editMode && <span onDoubleClick={activateMode}>{props.status || 'What is your mood today?'}</span>
      }
    </div>
  )

}

export default ProfileStatus;