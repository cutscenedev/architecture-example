import { createContext } from 'react'

import DependencyContainer from './dependencyContainer'

const dependencyContext = createContext<null | DependencyContainer>(null)

const DependencyContextProvider = dependencyContext.Provider
const DependencyContextConsumer = dependencyContext.Consumer

export { dependencyContext, DependencyContextProvider, DependencyContextConsumer }
