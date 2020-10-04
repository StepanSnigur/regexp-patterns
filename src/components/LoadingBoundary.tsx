import React from 'react'

interface ILoadingBoundary {
  isLoading: boolean
}
const LoadingBoundary: React.FC<ILoadingBoundary> = props => {
  return props.isLoading ? <div>loading</div> : <>{props.children}</>
}

export default LoadingBoundary
