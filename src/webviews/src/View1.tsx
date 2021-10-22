import React, { FunctionComponent } from 'react'
import { VscFlame } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Input from './lib/components/Input'
import Toggle from './lib/components/Toggle'
import useVSCodeState from './lib/state/reactState'
import VSCodeAPI from './lib/VSCodeAPI'

type View1Props = {}

const View1: FunctionComponent<View1Props> = props => {
  const [val, setVal] = useVSCodeState<string>('', 'val')
  const [success, setSuccess] = useVSCodeState<string>('', 'success')
  const [err, setErr] = useVSCodeState<string>('', 'err')
  const [checked, setChecked] = useVSCodeState<boolean>(false, 'checked')
  const [checked2, setChecked2] = useVSCodeState<boolean>(false, 'checked2')
  console.log('Rendering View1')
  return (
    <div className="p-2 flex flex-col space-y-2">
      <div className="text-2xl font-bold text-vscode-settings-headerForeground">
        Hello, world!
      </div>
      <div className="text-base text-vscode-foreground flex items-baseline">
        <div className="text-vscode-button-foreground mr-2">
          <VscFlame />
        </div>
        <div>This is some body copy. It has the base text size.</div>
      </div>
      <Input
        value={val}
        title="What is the meaning of all this?"
        label="Life, the universe and everything."
        placeholder="Type some numbers…"
        success={success}
        error={err}
        handleChange={e => {
          const newval = e.target.value
          setVal(newval)
          if (newval === '42') {
            setSuccess('That is the correct value!')
            setErr(undefined)
          } else {
            setSuccess(undefined)
            setErr('The only correct answer is 42')
          }
        }}
      />
      <Toggle
        title="Do you like checkboxes?"
        label="Of course you do."
        checked={checked}
        handleChange={e => setChecked(e.target.checked)}
      />
      <Toggle
        title="Another Checkbox"
        label="Why not?"
        checked={checked2}
        handleChange={e => setChecked2(e.target.checked)}
      />
      <h2>Current VSCodeAPI State:</h2>
      <code>
        <pre>{JSON.stringify(VSCodeAPI.getState(), null, 2)}</pre>
      </code>
      <div>
        <Link to="/view2">View 2</Link>
      </div>
    </div>
  )
}

export default View1
