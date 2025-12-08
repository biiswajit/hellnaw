const steps = [
    { step: 1, title: "send us the raw file", description: "full podcast, long-form take, \nshort-form take, etc" },
    { step: 2, title: "we find the best parts", description: "we find the best moment \nfrom the video" },
    { step: 3, title: "create multiple clips", description: "then we create the \nrequested number of clips" },
    { step: 4, title: "send you back", description: "and send you \nthe edited clips" },
];

interface WorkflowItemProps {
    step: number;
    title: string;
    description: string;
}

function Workflow() {
    return (
        <div>
            {steps.map(({ step, title, description }) => (
                <WorkflowItem key={step} step={step} title={title} description={description} />
            ))}
        </div>
    );
}

function WorkflowItem({ step, title, description }: WorkflowItemProps) {
    return (
        <div className="flex flex-col lg:flex-row md:justify-between py-6 lg:p-3 uppercase tracking-tighter lg:border-b-2">
            <h2 className="flex flex-col lg:flex-row gap-3 font-bold text-center">
                <span className="text-6xl lg:text-4xl xl:text-6xl 2xl:text-7xl">({step})</span>
                <span className="text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl">{title}</span>
            </h2>
            <span className="font-semibold whitespace-pre-line text-center lg:text-right text-sm lg:text-base 2xl:text-xl">
                {description}
            </span>
        </div>
    );
}

export default Workflow;
