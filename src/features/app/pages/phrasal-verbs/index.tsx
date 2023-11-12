import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import phrasalVerbs from './common.json'

function AppPhrasalVerbsPage () {
  return (
    <>
      <h1>Phrasal Verbs</h1>
      <div>
        {phrasalVerbs.map((item, index) => {
          return (
            <Card key={index} className='my-2'>
              <CardHeader>
                <CardTitle>{item.verb}</CardTitle>
                <CardDescription>{item.definition}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {item.examples.map((e, i) => (
                    <li key={i} >{e}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export { AppPhrasalVerbsPage }
