type Props = {
  thead: Array<string>
}

const Thead = ({ thead }: Props) => {
  return (
    <thead>
      <tr>
        {thead.map((item, id) => {
          return (
            <th key={id} className="border border-slate-600 px-3 xy-2 text-sm">{item}</th>
          )
        })}
      </tr>
    </thead>
  )
}

export default Thead