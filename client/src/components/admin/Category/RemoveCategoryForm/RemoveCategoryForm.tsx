import React from 'react';
import { Button, ButtonGroup } from 'semantic-ui-react';
import { useCategory } from 'src/hooks';
import './RemoveCategoryForm.scss';

interface RevemoCategoryFormProps {
  toggleModal: () => void;
  id: number;
  onRefetch: () => void;
}

export default function RemoveCategoryForm({
  onRefetch,
  id,
  toggleModal,
}: RevemoCategoryFormProps) {
  const { removeCategory } = useCategory();
  return (
    <div>
      <h2>Are you sure you want to remove this user?</h2>
      <ButtonGroup fluid>
        <Button
          content='Yes'
          positive
          onClick={() => {
            removeCategory(id);
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
