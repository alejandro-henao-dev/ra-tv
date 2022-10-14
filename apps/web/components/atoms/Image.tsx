import { Skeleton, SkeletonProps } from "@mui/material"

interface Props extends SkeletonProps {
  width?: number,
  height?: number,
  variant?: "rectangular" | "text" | "rounded" | "circular",
  alt?:string
}
export const Image: React.FC<Props> = ({
  width = 210,
  height = 118,
  variant = 'rectangular',
  
  ...props
}) => {
  
  return <Skeleton
    variant={variant}
    width={width}
    height={height}
    {...props}
  />
}