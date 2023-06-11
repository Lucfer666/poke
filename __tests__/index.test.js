import { render, screen } from '@testing-library/react'
import Index from '../pages/index'

describe('Index', ()=>{
  describe('Pokemon', ()=>{
    it('rendering', ()=>{
      render(
	<Index pokemones={[{ name: 'bulbasaur', url: '/pokemones/1' }]}/>
      )

      const bulbasaur = screen.getByText('bulbasaur')
      expect(bulbasaur).toBeInTheDocument()

      console.log(bulbasaur.getAttribute('href'))

      const url = bulbasaur.getAttribute('href')
      expect(url).toEqual('/pokemones/1')
    })
  })

})
