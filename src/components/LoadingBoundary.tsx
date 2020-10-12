import React from 'react'

interface ILoadingBoundary {
  isLoading: boolean,
  preloadingComponent: () => void
}
const LoadingBoundary: React.FC<ILoadingBoundary> = props => {
  return props.isLoading ? <>{props.preloadingComponent()}</> : <>{props.children}</>
}

export default LoadingBoundary
