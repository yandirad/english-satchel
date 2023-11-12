import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import phrasalVerbs from './common.json'

function AppPhrasalVebsPage () {
  return (
    <>
      <h1>Phrasal Verbs</h1>
      <div>
        {phrasalVerbs.map((item, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                {item.verb}
              </CardHeader>
              <CardDescription>
                {item.definition}
              </CardDescription>
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

export { AppPhrasalVebsPage }
