import { changeCount } from '@app/store/cartSlice'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useAppDispatch } from '@shared/hooks/useAppDispatch'
import { FC } from 'react'

import s from './change-count-buttons.module.scss'

interface Props {
  count: number
  id: number
}

export const ChangeCountButtons: FC<Props> = ({ count, id }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={s.changeCountButtons}>
      <RemoveCircleIcon
        className={s.addButton}
        onClick={() => dispatch(changeCount({ type: 'remove', id }))}
      />
      <p className={s.count}>{count}</p>
      <AddCircleIcon
        className={s.removeButton}
        onClick={() => dispatch(changeCount({ type: 'add', id }))}
      />
    </div>
  )
}
