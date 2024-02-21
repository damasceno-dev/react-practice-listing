import {Plus, Search ,FileDown, MoreHorizontal} from 'lucide-react'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
import { Control, Input } from './components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'
import { Pagination } from './components/pagination'
export function App() {

  return (
    <div className="py-10 space-y-8">
      <div>
        <Header/>
        <Tabs/>
      </div>
      <main className="max-w-6xl mx-auto space-y-5">
        <div className='flex items-center gap-3'>
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant='primary'>
            <Plus className='size-3'></Plus>
            Create New
          </Button>
        </div>

        <div className='flex itesm-center justify-between'>
          <Input variant='filter'>
            <Search className='size-3'></Search>
            <Control placeholder='Search tags...'></Control>
          </Input>

          <Button>
            <FileDown className='size-3'></FileDown>
            Export
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({length: 10}).map((_, i) => (
            <TableRow key={i}>
              <TableCell></TableCell>
              <TableCell>
                <div className='flex flex-col gap-0.5'>
                  <span className='font-medium '>React</span>
                  <span className='text-xs text-zinc-500'>60f88d74-cf9e-4eff-b678-3478f36ac616</span>
                </div>
              </TableCell>
              <TableCell className='text-zinc-500'>
                13 vídeo(s)
              </TableCell>
              <TableCell className='text-right'>
                <Button size='icon'>
                  <MoreHorizontal/>
                </Button>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination></Pagination>
      </main>
    </div>
  )
}