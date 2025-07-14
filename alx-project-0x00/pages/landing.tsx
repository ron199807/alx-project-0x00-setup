import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />

        <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
          <div className="flex items-center gap-4">
            <Button title="Small" size="small" />
            <Button title="Medium" size="medium" />
            <Button title="Large" size="large" />
          </div>
        </section>

        {/* Shape Variations */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Shapes</h2>
          <div className="flex items-center gap-4">
            <Button title="Rounded Small" shape="sm" />
            <Button title="Rounded Medium" shape="md" />
            <Button title="Pill" shape="full" />
          </div>
        </section>

        {/* Variant Variations */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Variants</h2>
          <div className="flex items-center gap-4">
            <Button title="Primary" variant="primary" />
            <Button title="Secondary" variant="secondary" />
            <Button title="Outline" variant="outline" />
          </div>
        </section>

         <section>
          <h2 className="text-xl font-semibold mb-4">Combinations</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button title="Large Pill" size="large" shape="full" variant="primary" />
            <Button title="Small Outline" size="small" variant="outline" />
            <Button 
              title="Custom Class" 
              className="bg-purple-600 hover:bg-purple-700 text-white" 
            />
          </div>
        </section>
        </div>

        
    )
}

export default Landing;