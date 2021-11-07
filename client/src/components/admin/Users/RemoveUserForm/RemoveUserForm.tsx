import React from 'react';
import { Button, ButtonGroup } from 'semantic-ui-react';
import { useUser } from 'src/hooks';

interface RemoveUserFormProps {
  toggleModal: () => void;
  id: number;
  onRefetch: () => void;
}

export default function RemoveUserForm({
  toggleModal,
  onRefetch,
  id,
}: RemoveUserFormProps) {
  const { removeUser } = useUser();
  return (
    <div>
      <h2>Are you sure you want to remove this user?</h2>
      <ButtonGroup fluid>
        <Button
          content='Yes'
          positive
          onClick={() => {
            removeUser(id);
            onRefetch();
            toggleModal();
          }}
        />
        <Button.Or />
        <Button content='No' negative onClick={toggleModal} />
      </ButtonGroup>
    </div>
  );
}
