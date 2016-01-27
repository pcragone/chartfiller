/**
 * Docstring for MyCalculator
 * A description of the class goes here...
 *
 *
 * @author
 * @version
 */
class MyCalculator {
    /**
     * Conversion factor for Km -> Miles
     * @const KM_TO_MILES 1.609
     */
    public static final double KM_TO_MILES = 1.609;

    /**
     * Conversion factor for Liters -> Gallons
     * @const LITERS_TO_GALLONS 1.3
     */
    public static final double LITERS_TO_GALLONS = 1.3;

    /**
     * Asks user for kilometers driven and liters of fuel
     * purchased and calculates MPG.
     *
     * @params String argv
     * @return void
     */
    public void main(String[] argv) {
        /*
         * Get user input
         */
        System.out.println("How many liters of fuel did you purchase? ");
        int liters = keyboard.nextInt();
        System.out.println("How many kilometers have you driven? ");
        int kilometers = keyboard.nextInt();

        //double miles = kilometers / MyCalculator.KM_TO_MILES;
        //double gallons = liters / MyCalculator.LITERS_TO_GALLONS;
        //double mpg = miles / gallons;

        double miles = this.getMiles( kilometers );
        double gallons = this.getGallons( liters );
        double mpg = this.getMPG(miles, gallons);

        //this.getMPG( this.getMiles(kilometers), this.getGallons(liters));

        System.out.printf("Results:\n"
                          + "Purchased %d liters (%.1f gallons) of fuel\n"
                          + "Travelled %d km (%.1f miles)\n"
                          + "Miles per gallon: %.1f\n",
                          liters,
                          gallons,
                          kilometers,
                          miles,
                          mpg
                          );
    }

    /**
     * @param double miles
     * @param double gallons
     * @return double
     */
    public double getMPG(double miles, double gallons) {
        return miles / gallons;
    }

    /**
     * Returns miles, given kilometers.
     *
     * @param int kilometers
     * @return double
     */
    public double getMiles(int kilometers) {
        return kilometers / MyCalculator.KM_TO_MILES;
    }

    /**
     * Returns gallons, given liters
     *
     * @param int liters
     * @return double
     */
    public double getGallons(int liters) {
        return liters / MyCalculator.LITERS_TO_GALLONS;
    }
}



