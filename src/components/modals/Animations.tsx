import { Slide, Zoom } from "@mui/material"
import type { TransitionProps } from "@mui/material/transitions"
import { forwardRef, type ReactElement, type Ref } from "react"

export const TransitionSlide = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return (
    <Slide direction={'up'} ref={ref} {...props}>
      {props.children}
    </Slide>
  )
})

export const TransitionZoom = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return (
    <Zoom ref={ref} {...props}>
      {props.children}
    </Zoom>
  )
})
